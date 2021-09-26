import React, { useCallback, useState } from 'react'
import { Button, Form, Icon, Section } from 'react-bulma-components'
import { Save, User as _User } from 'react-feather'
import { useFetch } from '../../../hooks/useFetch'
import { useIdParams } from '../../../hooks/useIdParams'
import { IUser } from '../../../models/IUser'
import { getUser } from '../../../services/users'
import { LoadContainer } from '../../components/Loader/Loader'

export function User(): JSX.Element {
  const id = useIdParams()
  const fetch = useCallback(() => getUser(id), [id])
  const [loading, user] = useFetch<IUser | undefined>(fetch, undefined)
  const [username, setUsername] = useState(user?.username)

  return (
    <Section>
      <LoadContainer loading={loading}>
        <form>
          <Form.Field>
            <Form.Label>Username</Form.Label>
            <Form.Control>
              <Form.Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Icon align="left" size="small">
                <_User />
              </Icon>
            </Form.Control>
          </Form.Field>

          <Form.Field kind="group">
            <Form.Control>
              <Button type="submit" color="primary">
                <Icon align="left" size="small">
                  <Save />
                </Icon>
                <span>Save</span>
              </Button>
            </Form.Control>
          </Form.Field>
        </form>
      </LoadContainer>
    </Section>
  )
}
