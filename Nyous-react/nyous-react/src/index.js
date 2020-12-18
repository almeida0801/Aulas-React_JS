import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NaoEncontada from './pages/naoencontrada';

// onde eu passo as rotas
const routing = (
  <Router>
    <Switch>
      <Route exact path = '/' component={Home} />
      <Route path = '/login' component={Login} />
      <Route path = '/cadastrar' component={Cadastrar} />
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
