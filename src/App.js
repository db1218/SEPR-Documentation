import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./layout.css"
import Header from './components/header.js';
import Dashboard from './pages/Dashboard.js';
import Page2 from './pages/Page2.js';

export default function App() {
  return (
    <Router>
      <Header />
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}>
        <Switch >
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
