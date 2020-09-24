import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import DashboardPage from './DashboardPage/DashboardPage';
import ManageOwnersPage from './ManageOwnersPage/ManageOwnersPage';
import Nav from './Nav/Nav';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/owners" component={ManageOwnersPage} />
          
        </div>
      </Router>
    );
  }
}

export default App;
