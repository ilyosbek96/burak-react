/// <reference types="jest" />
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

// Use a permissive type for the test provider to avoid JSX typing issues
const ReduxProvider: React.ComponentType<any> = Provider as any;

test('renders learn react link', () => {
  const { getByText } = render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
