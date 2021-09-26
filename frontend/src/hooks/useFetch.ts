import { useCallback, useEffect, useState } from "react"

export function useFetch<T>(fetchFn: () => Promise<T>, defaultValue: T): [boolean, T, Error | undefined, () => void] {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T>(defaultValue)
  const [error, setError] = useState<Error>()
  const [mounted, setMounted] = useState(false)

  const refresh = useCallback(() => {
    fetchFn()
      .then((data) => {
        if (mounted) setData(data)
      })
      .catch((error) => {
        if (mounted) setError(error)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
  }, [fetchFn, mounted])

  useEffect(() => {
    setMounted(true)
    refresh()
    return () => {
      setMounted(false)
    }
  }, [refresh])

  return [loading, data, error, refresh]
}
