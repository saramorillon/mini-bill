import { useParams } from 'react-router'

export function useIdParams(): number {
  const params = useParams<{ id: string }>()
  const id = parseInt(params.id, 10)
  if (isNaN(id)) throw new Error(`${id} is not number`)
  return id
}
