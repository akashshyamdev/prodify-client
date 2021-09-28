import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from '../Layout';

test('renders to screen', () => {
  render(
    <Layout>
      <div>Layout</div>
    </Layout>
  );

  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
});
