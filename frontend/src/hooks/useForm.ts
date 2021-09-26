import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { useFetch } from './useFetch'

interface IForm<T> {
  onSave: (body: Partial<T>) => void
  onDelete: (data: T) => void
  loading: boolean
  error?: Error
  data?: T
}

export function useForm<T>(
  getData: () => Promise<T | undefined>,
  saveData: (body: Partial<T>) => Promise<string>,
  deleteData: (data: T) => Promise<string>
): IForm<T> {
  const history = useHistory()
  const [loading, data, error] = useFetch(getData, undefined)

  const onSave = useCallback((body: Partial<T>) => saveData(body).then(history.push), [history])

  const onDelete = useCallback((data: T) => deleteData(data).then(history.push), [history])

  return { onSave, onDelete, loading, error, data }
}
