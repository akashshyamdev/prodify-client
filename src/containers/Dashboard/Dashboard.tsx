import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Home from '../Home/Home';
import Todos from '../Todos/Todos';

export default function Dashboard() {
  return (
    <Layout>
      <Switch>
        <Route exact path={'/todos'} component={Todos} />

        <Route exact path={'/'} component={Home} />
      </Switch>
    </Layout>
  );
}
