import axios from 'axios'

export async function getVersion(): Promise<string> {
  const response = await axios.get('/api/version')
  if (response.status >= 400) throw new Error(response.statusText)
  return response.data
}
