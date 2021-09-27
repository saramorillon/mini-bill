import { Request, Response } from 'express'
import { Company } from '../../models/Company'

export async function getCompany(req: Request, res: Response) {
  const { id } = req.params
  try {
    const company = await Company.getRepository().findOne(id)
    res.status(200).json(company)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
