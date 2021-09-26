import sha224 from 'crypto-js/sha224'
import { Request, Response } from 'express'
import { User } from '../../models/User'

export async function postUser(req: Request, res: Response) {
  const user: User = req.body.user
  try {
    if (user.password) user.password = sha224(user.password).toString()
    const result = await User.getRepository().save(user)
    res.status(200).json(result.id)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
