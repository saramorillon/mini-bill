import React from 'react'
import { Box, Heading, Hero, Level, Section } from 'react-bulma-components'
import { NavLink } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import { getUsers } from '../../../services/users'
import { LoadContainer } from '../../components/Loader/Loader'

export function Users(): JSX.Element {
  const [loading, users] = useFetch(getUsers, [])

  return (
    <>
      <Hero color="light">
        <Hero.Body>
          <Heading>Users</Heading>
        </Hero.Body>
      </Hero>
      <Section>
        <LoadContainer loading={loading}>
          {users.map((user) => (
            <Box key={user.id}>
              <Level>
                <Level.Item justifyContent="left">
                  <Heading>{user.username}</Heading>
                </Level.Item>
                <Level.Item justifyContent="right">
                  <NavLink to={`/user/${user.id}`}>Edit</NavLink>
                </Level.Item>
              </Level>
            </Box>
          ))}
        </LoadContainer>
      </Section>
    </>
  )
}
