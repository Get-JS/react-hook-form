import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from 'pages/Main';
import RegisterPage from 'pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;
