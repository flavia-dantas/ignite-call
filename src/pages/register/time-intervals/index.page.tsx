import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@pattern-lab-ui/react'
// import { api } from "../../../lib/axios"
import { ArrowRight } from 'lucide-react'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './styles'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horário que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                containerProps={{ size: 'sm' }}
                type="time"
                step={60}
              />
              <TextInput
                containerProps={{ size: 'sm' }}
                type="time"
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>

          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                containerProps={{ size: 'sm' }}
                type="time"
                step={60}
              />
              <TextInput
                containerProps={{ size: 'sm' }}
                type="time"
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>
        </IntervalContainer>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
