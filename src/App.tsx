import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  const buttons: number[] = [1, 2, 3, 4, 5, 6]

  return (
    <ThemeProvider theme={defaultTheme}>
      {buttons.map((button) => (
        <Button key={button} />
      ))}
      <GlobalStyle />
    </ThemeProvider>
  )
}
