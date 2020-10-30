import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataProvider } from 'contexts/DataContext';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Result from './Result';
import Header from 'components/organism/Header';

function RegisterPage() {
  return (
    <DataProvider>
      <Header title={'Register using react hook form'} />
      <Router>
        <Switch>
          <Route path={['/register', '/register/step1']} exact component={Step1} />
          <Route path="/register/step2" component={Step2} />
          <Route path="/register/step3" component={Step3} />
          <Route path="/register/result" component={Result} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default RegisterPage;
