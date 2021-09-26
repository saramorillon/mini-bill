import { Request, Response } from 'express'
import { User } from '../../models/User'

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params
  try {
    await User.getRepository().delete(id)
    res.status(204)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
