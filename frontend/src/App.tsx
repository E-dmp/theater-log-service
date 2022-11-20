import { BrowserRouter} from 'react-router-dom';
import Routes from './ServiceRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App