import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const transport = axios.create({ withCredentials: true })

export const Axios = {
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return transport.get<T>(url, config).then((res) => res.data)
  },
  async getRaw<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return transport.get<T>(url, config)
  },
  async post<T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return transport.post<T>(url, body, config).then((res) => res.data)
  },
  async put<T>(url: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return transport.put<T>(url, body, config).then((res) => res.data)
  },
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return transport.delete<T>(url, config).then((res) => res.data)
  },
}
