import { cleanEnv, makeValidator, num, Spec, str } from 'envalid'
import session, { SessionOptions } from 'express-session'
import filestore from 'session-file-store'

function enm<T extends string>(spec: Spec<T>) {
  return makeValidator((input: string) => {
    if (isEnum(input, spec.choices)) return input
    throw new Error(`Invalid log level: "${input}"`)
  })(spec)
}

function isEnum<T extends string>(input: string, choices?: ReadonlyArray<T>): input is T {
  return choices?.length && choices.map(String).includes(input)
}

const env = cleanEnv(process.env, {
  NODE_ENV: enm({ choices: ['development', 'test', 'production'], default: 'production' }),
  APP_KEY: str(),
  APP_PORT: num({ default: 80 }),
  LOG_LEVEL: enm({ choices: ['debug', 'info', 'warn', 'error'], default: 'info' }),
  SESSION_DIR: str(),
  COOKIE_DOMAIN: str(),
})

interface IConfig {
  environment: 'development' | 'test' | 'production'
  port: number
  keys: string[]
  logLevel: 'debug' | 'info' | 'warn' | 'error'
  session: SessionOptions
}

const FileStore = filestore(session)

export const config: IConfig = {
  environment: env.NODE_ENV,
  port: env.APP_PORT,
  keys: [env.APP_KEY],
  logLevel: env.LOG_LEVEL,
  session: {
    secret: [env.APP_KEY],
    resave: false,
    saveUninitialized: false,
    store: new FileStore({ path: env.SESSION_DIR, ttl: 604800000 }),
    name: 'sid',
    cookie: { domain: env.COOKIE_DOMAIN, httpOnly: false, secure: false },
  },
}
