import React, {Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './views/layout/noMatch/noMatch'
import { ToastContainer } from 'react-toastify';

import './App.css';
const chalk = require('chalk');
console.log(chalk.blue('Hello world! Do'));

const SignInComponent = React.lazy(() => import('./views/loginManager/sign-in/signIn'));
const DashboardComponent = React.lazy(() => import('./views/layout/layout'));

function App() {
  return (
    <Suspense fallback={<div className="lds-ripple"><div></div><div></div></div>}>
      <Router>
        <div className="o-main">
          <Switch>
            <Route path="/web" component={DashboardComponent}>
            </Route>
            <Route exact path="/login" component={SignInComponent}>
            </Route>
            <Route exact path="*">
              <NoMatch />
            </Route>
          </Switch>
          <ToastContainer hideProgressBar={true}/>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
