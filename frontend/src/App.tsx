import { BrowserRouter} from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import Routes from './ServiceRoutes';

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App