import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from 'redux/store';
import {PaymentHistory} from 'screens';

jest.useFakeTimers();

it('renders search bar correctly', async () => {
  const {getByPlaceholderText} = render(
    <Provider store={store}>
      <PaymentHistory />
    </Provider>,
  );
  const input = await waitFor(() =>
    getByPlaceholderText(/Search by name, amount and status/i),
  );
  expect(input).toBeTruthy();
});

it('check if search bar function works correctly', () => {
  const {getByPlaceholderText} = render(
    <Provider store={store}>
      <PaymentHistory />
    </Provider>,
  );
  const input = getByPlaceholderText(/Search by name, amount and status/i).props
    .onChangeText;
  input('test');
  expect(input).toBeTruthy();

  const input2 = getByPlaceholderText(/Search by name, amount and status/i);
  expect(input2.props.value).toBe('test');
});
