import { Button, TextInput } from '@pattern-lab-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        containerProps={{ size: 'sm' }}
        prefix="ignite.com/"
        placeholder="seu-usuário"
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
