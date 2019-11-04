import React, { createContext, useState, useEffect } from 'react';
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

const DeviceInfoContext = createContext(window.innerWidth);

function throttle (callback, limit) {
  var wait = false;
  return function () {
      if (!wait) {
          callback.call();
          wait = true;
          setTimeout(function () {
              wait = false;
          }, limit);
      }
  }
}

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [previousPath, setPreviousPath] = useState("/");
  const [currentPath, setCurrentPath] = useState("/");

  const updateCurrentPath = (path) => {
    if (path !== currentPath) {
      setCurrentPath(path);
      setPreviousPath(currentPath);
    }
  }

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', throttle(handleWindowResize, 250));
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  })
  
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
        <DeviceInfoContext.Provider value={{ width, currentPath, previousPath, updateCurrentPath }}>
          <Header DeviceWidth={width} history={{currentPath, previousPath, updateCurrentPath}} />
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
                <Menu history={{currentPath, previousPath, updateCurrentPath}} />
              </Route>
              <Route path="/">
                <Dashboard DeviceWidth={width} />
              </Route>
            </Switch>
          </div>
        </DeviceInfoContext.Provider>  
    </Router>
  );
}
