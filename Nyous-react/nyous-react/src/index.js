import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import NaoEncontada from './pages/naoencontrada';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import DashBoard from './pages/admin/dashboard';


// onde eu passo as rotas
const routing = (
  <Router>
    <Switch>
      <Route exact path = '/' component={Home} />
      <Route path = '/login' component={Login} />
      <Route path = '/cadastrar' component={Cadastrar} />
      <Route path = '/eventos' component={Eventos} />
      <Route path = '/dashboard' component={DashBoard} />
      <Route component={NaoEncontada} />
    </Switch>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
