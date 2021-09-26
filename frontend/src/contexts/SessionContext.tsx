import React, { createContext, PropsWithChildren, useContext } from 'react'
import { useFetch } from '../hooks/useFetch'
import { ISession } from '../models/ISession'
import { getSession } from '../services/session'
import { LoadContainer } from '../ui/components/Loader/Loader'

export const SessionContext = createContext<ISession | null>(null)

export function SessionProvider({ children }: PropsWithChildren<unknown>): JSX.Element {
  const [loading, session] = useFetch<ISession | null>(getSession, null)

  return (
    <SessionContext.Provider value={session}>
      <LoadContainer loading={loading}>{children}</LoadContainer>
    </SessionContext.Provider>
  )
}

export function useSession(): ISession {
  const session = useContext(SessionContext)
  if (!session) {
    throw new Error('No session found')
  }
  return session
}
