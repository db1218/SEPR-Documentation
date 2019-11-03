import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./layout.css"
import Header from './components/header.js';
import Dashboard from './pages/Dashboard.js';
import Requirements from './pages/Requirements';
import RiskAssessment from './pages/RiskAssessment';
import Architecture from './pages/Architecture';
import Menu from './pages/Menu';

export default function App() {
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <Header siteTitle="SEPR-Documentation"/>
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}>
        <Switch >
          <Route path="/architecture">
            <Architecture />
          </Route>
          <Route path="/riskassessment">
            <RiskAssessment />
          </Route>
          <Route path="/requirements">
            <Requirements />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
