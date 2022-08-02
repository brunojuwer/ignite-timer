import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmounInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minuteAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(120, 'O ciclo precisa ser de no máximo 120 minutos'),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Alguma outra coisa"></option>
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmounInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={120}
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
