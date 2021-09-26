import React, { useContext } from 'react'
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom'
import { SessionContext } from '../../../contexts/SessionContext'

export function PrivateRoute(props: RouteProps): JSX.Element {
  const session = useContext(SessionContext)
  if (session) return <Route {...props} />
  const from = Array.isArray(props.path) ? props.path[0] : props.path
  return <Redirect to={`/login?from=${from}`} />
}

export function PublicRoute(props: RouteProps): JSX.Element {
  const session = useContext(SessionContext)
  const { search } = useLocation()
  if (!session) return <Route {...props} />
  return <Redirect to={new URLSearchParams(search).get('from') || '/'} />
}
