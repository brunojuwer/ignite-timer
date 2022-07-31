import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefautlLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
