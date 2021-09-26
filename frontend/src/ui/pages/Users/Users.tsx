import React from 'react'
import { Button, Heading, Hero, Icon, Section, Table } from 'react-bulma-components'
import { Edit3, Plus } from 'react-feather'
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
        <AddUser />
        <LoadContainer loading={loading}>
          <Table striped bordered size="fullwidth">
            <thead>
              <tr>
                <th>Username</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td width="100%">{user.username}</td>
                  <td>
                    <Button renderAs={NavLink} to={`/user/${user.id}`} size="small" color="ghost" outlined>
                      <Icon size="small">
                        <Edit3 size={14} />
                      </Icon>
                      <span>Edit</span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </LoadContainer>
      </Section>
    </>
  )
}

function AddUser() {
  return (
    <Button renderAs={NavLink} to="/user" color="primary" outlined className="mb-2">
      <Icon size="small">
        <Plus />
      </Icon>
      <span>Create user</span>
    </Button>
  )
}
