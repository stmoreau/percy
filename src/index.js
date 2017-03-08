import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import Schedule from './components/Schedule';
import Voicemails from './components/Voicemails';
import Favorites from './components/Favorites';
import Settings from './components/Settings';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/schedule" component={Schedule} />
    <Route path="/voicemails" component={Voicemails} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/settings" component={Settings} />
  </Router>,
  document.getElementById('root')
);
