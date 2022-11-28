import { BrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query'
import { ToastContainer, Zoom } from 'react-toastify';
import Routes from './ServiceRoutes'

const contextClass = {
  success: 'bg-blue-600',
  error: 'bg-red-600',
  info: 'bg-gray-700',
  warning: 'bg-orange-400',
  default: 'bg-black text-white ',
  dark: 'bg-white text-gray-600',
};
const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
     <ToastContainer
              position='bottom-right'
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              transition={Zoom}
              closeButton={false}
              toastClassName={() =>
                // contextClass[(theme == 'light'? 'default': 'info')] +
                contextClass['info'] +
                ' relative flex p-1 min-h-10 rounded-md justify-between m-2 cursor-pointer'
              }
              bodyClassName={() => ' flex  text-sm font-md block p-3'}
            />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
