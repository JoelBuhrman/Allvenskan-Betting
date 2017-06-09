import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/games/GamesPage';
import HostPage from './components/host/HostPage';
import StartPage from './components/LoginAndRegister/StartPage';
import TablePage from './components/Table/TablePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StartPage} />
    <Route path="home" component={HomePage} />
    <Route path="host" component={HostPage} />
    <Route path="table" component={TablePage} />
  </Route>
);
