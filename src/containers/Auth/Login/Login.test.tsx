import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { render as rtlRender, RenderOptions, screen } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import authReducer from '../../../redux/slices/auth';
import store from '../../../store';
import Login from './Login';

type DefaultOptions = Omit<RenderOptions, 'queries'> & { initialState?: string; store?: EnhancedStore<any> };

const render = (ui: ReactElement, options?: DefaultOptions) => {
  const store =
    options?.store ||
    configureStore({
      reducer: {
        auth: authReducer,
      },
    });

  return rtlRender(<Provider store={store}>{ui}</Provider>, options);
};

test('renders with redux with defaults', async () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  expect(screen.getByText(/login to prodify/i)).toBeInTheDocument();
});
