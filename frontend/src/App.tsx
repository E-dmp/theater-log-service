import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './ServiceRoutes';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App