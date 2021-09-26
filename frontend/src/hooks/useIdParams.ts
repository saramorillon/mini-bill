import { useParams } from 'react-router'

export function useIdParams(): number | undefined {
  const params = useParams<{ id?: string }>()
  if (params.id === undefined) return
  const id = parseInt(params.id, 10)
  if (isNaN(id)) throw new Error(`${id} is not number`)
  return id
}
