import { Request, Response } from 'express'
import { Company } from '../../models/Company'

export async function getCompany(req: Request, res: Response) {
  try {
    const company = await Company.getRepository().findOne({ isMain: true })
    res.status(200).json(company)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
