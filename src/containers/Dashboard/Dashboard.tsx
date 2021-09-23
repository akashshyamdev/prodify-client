import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../layout/Layout';
import Home from './Home/Home';

export default function Dashboard() {
  return (
    <Layout>
      <Route exact path={'/'} component={Home} />
    </Layout>
  );
}
