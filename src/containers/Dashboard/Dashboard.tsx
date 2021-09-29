import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Home from './Home/Home';
import Todos from './Todos/Todos';

export default function Dashboard() {
  return (
    <Layout>
      <Route exact path={'/'} component={Home} />

      <Route exact path={'/todos'} component={Todos} />
    </Layout>
  );
}
