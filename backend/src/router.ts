import { Router } from 'express'
import { logout } from './controllers/session/logout'
import { login } from './controllers/session/login'
import { hasSession } from './middlewares/session'
import { getSession } from './controllers/session/getSession'
import { getVersion } from './controllers/version/getVersion'

export const router = Router()

router.post('/login', login)
router.get('/version', getVersion)

router.use(hasSession())

router.get('/logout', logout)
router.get('/session', getSession)
