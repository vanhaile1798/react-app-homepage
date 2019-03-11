import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/styles.scss';
import RouteWrapper from './RouteWrapper';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Route path='/react-app-homepage' component={RouteWrapper} />
      </div>
    </Router>
  );
}

export default App;
