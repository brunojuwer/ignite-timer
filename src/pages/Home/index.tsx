import { Play } from 'phosphor-react'
import { FormEvent } from 'react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmounInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  function handleStartCoundown(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="">durante</label>
          <MinutesAmounInput
            type="number"
            id="minutesAmount"
            placeholder="00"
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton
          disabled
          type="submit"
          onClick={handleStartCoundown}
        >
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
