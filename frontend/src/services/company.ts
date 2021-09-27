import { ICompany } from '../models/ICompany'
import { Axios } from './Axios'

export async function getCompany(): Promise<ICompany> {
  return Axios.get<ICompany>('/api/company')
}

export async function saveCompany(company: Partial<ICompany>): Promise<string> {
  await Axios.post('/api/company', { company })
  return '/company'
}
