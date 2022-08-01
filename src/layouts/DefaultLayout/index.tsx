import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefautlLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
