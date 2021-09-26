import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function useText<T extends string | undefined = string>(
  value?: T
): [T | undefined, Dispatch<SetStateAction<T | undefined>>] {
  const [text, setText] = useState<T>()

  useEffect(() => {
    setText(value)
  }, [value])

  return [text, setText]
}
