import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/base.css';
import './App.css';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CustomLayout from './components/CustomLayout';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router basename="/static">
			<div>
				<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route exact path="/home" component={CustomLayout}/>
				<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
    </div>
  );
}

export default App;
