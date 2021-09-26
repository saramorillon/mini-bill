import React from 'react'
import { Footer as _Footer } from 'react-bulma-components'
import { useFetch } from '../../../hooks/useFetch'
import { getVersion } from '../../../services/version'
import { LoadContainer } from '../Loader/Loader'

export function Footer(): JSX.Element {
  const [loading, version] = useFetch(getVersion, '')

  return (
    <_Footer>
      <LoadContainer loading={loading}>
        v{version} &copy; Sara Morillon {new Date().getFullYear()}
      </LoadContainer>
    </_Footer>
  )
}
