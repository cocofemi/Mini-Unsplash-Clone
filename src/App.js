import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/base.css';
import './App.css';

import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from './components/LoginPage';
import CustomLayout from './components/CustomLayout';
import NotFoundPage from './components/NotFoundPage';

export const history = createHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
		<Switch>
		<Route exact path="/" component={withRouter(LoginPage)} />
		<Route exact path="/home" component={withRouter(CustomLayout)}/>
		<Route component={NotFoundPage} />
		</Switch>
		</Router>
    </div>
  );
}

export default App;
