import { IUser } from '../models/IUser'
import { Axios } from './Axios'

export async function getUsers(): Promise<IUser[]> {
  return Axios.get<IUser[]>('/api/users')
}

export async function getUser(id?: number): Promise<IUser | undefined> {
  if (!id) return undefined
  return Axios.get<IUser | undefined>(`/api/users/${id}`)
}

export async function saveUser(user: Partial<IUser>): Promise<string> {
  const id = await Axios.post<number>('/api/users', { user })
  return `/user/${id}`
}

export async function deleteUser(user: IUser): Promise<string> {
  await Axios.delete(`/api/users/${user.id}`)
  return '/users'
}
