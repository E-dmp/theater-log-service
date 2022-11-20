import { Routes, Route} from 'react-router-dom'
import Top from './components/pages/Top/Top'
import NotFound from './components/pages/NotFound'

const ServiceRoutes = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Top />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>

  )
}

export default ServiceRoutes
