import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {CreatePayment} from 'screens';
import {Provider} from 'react-redux';
import store from 'redux/store';

jest.useFakeTimers();

it('renders correctly', async () => {
  const {getAllByText} = render(
    <Provider store={store}>
      <CreatePayment />
    </Provider>,
  );
  const text = await waitFor(() => getAllByText(/Brass/i));
  expect(text).toHaveLength(2);
});

it('check if button exist', () => {
  const {getAllByText} = render(
    <Provider store={store}>
      <CreatePayment />
    </Provider>,
  );
  const button = getAllByText(/TRANSFER NOW/i);
  expect(button).toHaveLength(1);
});

it('test enter amount by setting it to a value', () => {
  const {getByPlaceholderText} = render(
    <Provider store={store}>
      <CreatePayment />
    </Provider>,
  );

  const input = getByPlaceholderText(/Enter Amount/i);
  fireEvent.changeText(input, '100');
  expect(input.props.value).toBe('100');
});

it('test account number field if editable', () => {
  const {getByPlaceholderText} = render(
    <Provider store={store}>
      <CreatePayment />
    </Provider>,
  );

  const accountNumber = getByPlaceholderText(/Enter Amount/i);
  expect(accountNumber.props.editable).toBe(false);
});
