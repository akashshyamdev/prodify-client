import { render as renderRTL, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React, { ReactElement } from 'react';
import { Router } from 'react-router-dom';
import Layout from '../Layout';

const render = (ui: ReactElement, initialRoute?: string) => {
  const history = createMemoryHistory({ initialEntries: [initialRoute || '/'] });

  renderRTL(<Router history={history}>{ui}</Router>);

  return { history };
};

test('renders to screen', () => {
  render(
    <Layout>
      <div>A</div>
    </Layout>
  );

  expect(screen.getByTestId('sidebar')).toBeInTheDocument();
});

test('navigates to dashboard', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/dashboard/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/');
});

test('navigates to todos', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/todos/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/todos');
});

test('navigates to notes', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/notes/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/notes');
});

test('navigates to timer', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/timer/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/timer');
});

test('navigates to notes', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/notes/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/notes');
});

test('navigates to timer', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/timer/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/timer');
});

test('navigates to tracker', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/tracker/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/tracker');
});

test('navigates to notifications', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/notifications/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/notifications');
});

test('navigates to settings', () => {
  const { history } = render(<Layout>A</Layout>);

  const element = screen.getByText(/settings/i);

  expect(element).toBeInTheDocument();

  userEvent.click(element);

  expect(history.location.pathname).toBe('/settings');
});
