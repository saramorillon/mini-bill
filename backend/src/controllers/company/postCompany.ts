import { Request, Response } from 'express'
import { Company } from '../../models/Company'

export async function postCompany(req: Request, res: Response) {
  const company: Company = req.body.company
  try {
    company.isMain = true
    await Company.getRepository().save(company)
    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
