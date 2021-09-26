import { Request, Response } from 'express'
import { User } from '../../models/User'

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await User.getRepository().find()
    res.json(users)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}
