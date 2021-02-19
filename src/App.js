import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/base.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CustomLayout from './components/CustomLayout';
import NotFoundPage from './components/NotFoundPage';
import AppRouter from './routers/AppRouter';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
