import { IUser } from '../models/IUser'
import { Axios } from './Axios'

export async function getUsers(): Promise<IUser[]> {
  return Axios.get<IUser[]>('/api/users')
}

export async function getUser(id?: number): Promise<IUser | undefined> {
  if (!id) return undefined
  return Axios.get<IUser | undefined>(`/api/users/${id}`)
}
