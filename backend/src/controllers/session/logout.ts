import { Request, Response } from 'express'

export function logout(req: Request, res: Response): void {
  req.logout()
  res.sendStatus(204)
}
