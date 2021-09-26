import { IUser } from '../models/IUser'
import { Axios } from './Axios'

export async function getUsers(): Promise<IUser[]> {
  return Axios.get<IUser[]>('/api/users')
}
