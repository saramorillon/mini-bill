import { FormEvent, useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useFetch } from './useFetch'

interface IForm<T> {
  onSave: (e: FormEvent) => void
  onDelete: (id: string | number) => void
  loading: boolean
  error?: Error
  values: Partial<T>
  handleChange: (name: keyof T, value: T[keyof T]) => void
}

export function useForm<T>(
  getData: () => Promise<T | undefined>,
  saveData: (body: Partial<T>) => Promise<string>,
  deleteData: (id: string | number) => Promise<string>
): IForm<T> {
  const history = useHistory()
  const [loading, data, error] = useFetch(getData, undefined)
  const [values, setValues] = useState<Partial<T>>(data || {})

  const onSave = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      saveData(values).then(history.push)
    },
    [history, values]
  )

  const onDelete = useCallback((id: string | number) => deleteData(id).then(history.push), [history])

  const handleChange = useCallback(
    (name: keyof T, value: T[keyof T]) => {
      setValues((values) => ({ ...values, [name]: value }))
    },
    [setValues]
  )

  useEffect(() => {
    data && setValues(data)
  }, [data])

  return { onSave, onDelete, loading, error, values, handleChange }
}
