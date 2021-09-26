import axios from 'axios'
import { IUser } from '../models/IUser'
import { Axios } from './Axios'

export async function getSession(): Promise<IUser | null> {
  return axios
    .get<IUser>('/api/session', { withCredentials: true })
    .then((res) => res.data)
    .catch(() => null)
}

export async function login(username: string, password: string): Promise<void> {
  return Axios.post('/api/login', { username, password })
}

export async function logout(): Promise<void> {
  return Axios.get('/api/logout').then(() => {
    window.location.reload()
  })
}
