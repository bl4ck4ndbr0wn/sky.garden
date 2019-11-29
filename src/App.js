import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Routes/>
        </Router>
      </div>
    )
  }
}
