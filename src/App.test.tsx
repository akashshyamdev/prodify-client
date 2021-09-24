import { render as rtlRender, RenderOptions, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React, { ComponentType, ReactElement } from 'react';
import { Router } from 'react-router-dom';
import App from './App';

type DefaultOptions = Omit<RenderOptions, 'queries'> & { route: string };

const render = (ui: ReactElement, options?: DefaultOptions) => {
  const history = createMemoryHistory({ initialEntries: [options?.route || '/login'] });

  const Wrapper = ({ children }: { children: ReactElement }) => {
    return <Router history={history}>{children}</Router>;
  };

  return rtlRender(ui, { wrapper: Wrapper as ComponentType, ...options });
};

test('renders to screen', () => {
  render(<App />);

  expect(screen.getByTestId('router')).toBeInTheDocument();
});
