import React from 'react'
import { Button, Form, Icon, Section } from 'react-bulma-components'
import { Save } from 'react-feather'
import { useForm } from '../../../hooks/useForm'
import { getCompany, saveCompany } from '../../../services/company'
import { LoadContainer } from '../../components/Loader/Loader'

export function Company(): JSX.Element {
  const { loading, onSave, values, handleChange } = useForm(getCompany, saveCompany, async () => '')

  return (
    <Section>
      <LoadContainer loading={loading}>
        <form onSubmit={onSave}>
          <Form.Field>
            <Form.Label>Name</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                value={values.name || ''}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Address 1</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                value={values.address1}
                onChange={(e) => handleChange('address1', e.target.value)}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Address 2</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                value={values.address2}
                onChange={(e) => handleChange('address2', e.target.value)}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                value={values.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>City</Form.Label>
            <Form.Control>
              <Form.Input type="text" value={values.city} onChange={(e) => handleChange('city', e.target.value)} />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Country</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                value={values.country}
                onChange={(e) => handleChange('country', e.target.value)}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>SIREN</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                value={values.siren}
                onChange={(e) => handleChange('siren', e.target.value)}
                pattern="\d{9}"
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>SIRET</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                value={values.siret}
                onChange={(e) => handleChange('siret', e.target.value)}
                pattern="\d{14}"
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>VAT number</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                value={values.vat}
                onChange={(e) => handleChange('vat', e.target.value)}
                pattern="\d{12}"
              />
            </Form.Control>
          </Form.Field>

          <Form.Field kind="group">
            <Form.Control>
              <Button type="submit" color="primary">
                <Icon size="small">
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
