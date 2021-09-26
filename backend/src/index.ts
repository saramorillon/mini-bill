import { json, urlencoded } from 'body-parser'
import flash from 'connect-flash'
import cookieParser from 'cookie-parser'
import express from 'express'
import session from 'express-session'
import helmet from 'helmet'
import passport from 'passport'
import { Strategy } from 'passport-local'
import { createConnection } from 'typeorm'
import { config } from './config'
import { logger } from './libs/logger'
import { deserializeUser, localStrategy, serializeUser } from './libs/passport'
import { accessLogger } from './middlewares/accessLogger'
import { router } from './router'

passport.serializeUser(serializeUser)
passport.deserializeUser(deserializeUser)
passport.use(new Strategy(localStrategy))

createConnection().then(() => {
  const app = express()
  app.use(cookieParser())
  app.use(urlencoded({ extended: true }))
  app.use(json())
  app.use(session(config.session))
  app.use(flash())
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(accessLogger())
  app.use(helmet())
  app.use((req, res, next) => {
    res.locals.user = req.user
    next()
  })
  app.use(router)
  app.listen(config.port, () => {
    logger.info('app_start', { port: config.port })
  })
})
