import React, { PropsWithChildren } from 'react'
import { Loader } from 'react-feather'

export function LoadContainer({ loading, children }: PropsWithChildren<{ loading: boolean }>): JSX.Element {
  if (loading) {
    return <Loader />
  }

  return <>{children}</>
}
