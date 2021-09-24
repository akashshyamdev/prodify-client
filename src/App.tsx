import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Route, Router, Switch } from 'react-router-dom';
import history from './config/history';
import queryClient from './config/query';
import Login from './containers/Auth/Login/Login';
import Signup from './containers/Auth/Signup/Signup';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.JEST_WORKER_ID && <div data-testid={'router'}>TEST</div>}

      <Router history={history}>
        <Switch>
          {/* Auth */}
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />

          {/* Dashboard */}
          <Dashboard />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
