import React, { createContext, PropsWithChildren, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useFetch } from '../hooks/useFetch'
import { IUser } from '../models/IUser'
import { getSession } from '../services/session'
import { LoadContainer } from '../ui/components/Loader/Loader'

export const SessionContext = createContext<IUser | null>(null)

export function SessionProvider({ children }: PropsWithChildren<unknown>): JSX.Element {
  const history = useHistory()
  const [loading, session] = useFetch<IUser | null>(getSession, null)

  useEffect(() => {
    if (!session && !loading) {
      history.replace('/login')
    }
  }, [loading, session, history])

  return (
    <SessionContext.Provider value={session}>
      <LoadContainer loading={loading}>{children}</LoadContainer>
    </SessionContext.Provider>
  )
}

export function useSession(): IUser {
  const session = useContext(SessionContext)
  if (!session) {
    throw new Error('No session found')
  }
  return session
}
