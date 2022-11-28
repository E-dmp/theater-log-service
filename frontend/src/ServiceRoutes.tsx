import { Routes, Route} from 'react-router-dom'
import Top from './components/pages/Top/Top'
import Login from './components/pages/Login/Login'
import NotFound from './components/pages/NotFound'
import Register from './components/pages/Register/Register'

const ServiceRoutes = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Top />} />
      <Route path={`/login`} element={<Login />} />
      <Route path={`/register`} element={<Register />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>

  )
}

export default ServiceRoutes
