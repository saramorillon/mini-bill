import { Request, Response } from 'express'
import { version } from '../../../package.json'

export function getVersion(req: Request, res: Response) {
  res.status(200).send(version)
}
