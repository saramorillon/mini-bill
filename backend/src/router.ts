import { Router } from 'express'
import { logout } from './controllers/session/logout'
import { login } from './controllers/session/login'
import { hasSession } from './middlewares/session'
import { getSession } from './controllers/session/getSession'
import { getVersion } from './controllers/version/getVersion'
import { getUsers } from './controllers/users/getUsers'
import { getUser } from './controllers/users/getUser'
import { postUser } from './controllers/users/postUser'
import { deleteUser } from './controllers/users/deleteUser'

export const router = Router()

router.post('/login', login)
router.get('/version', getVersion)

router.use(hasSession())

router.get('/logout', logout)
router.get('/session', getSession)

router.get('/users', getUsers)
router.post('/users', postUser)
router.get('/users/:id', getUser)
router.delete('/users/:id', deleteUser)
