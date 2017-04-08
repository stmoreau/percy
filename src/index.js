import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import Application from './components/landing-page/Application';
import Schedule from './components/schedule/Schedule';
import Voicemails from './components/voicemails/Voicemails';
import Favorites from './components/favorites/Favorites';
import Settings from './components/settings/Settings';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Application} />
    <Route path="/schedule" component={Schedule} />
    <Route path="/voicemails" component={Voicemails} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/settings" component={Settings} />
  </Router>,
  document.getElementById('root')
);
