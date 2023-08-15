import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {TransactionList} from 'shared';

jest.useFakeTimers();

it('renders transaction correctly', async () => {
  const {getByText} = render(
    <TransactionList
      date=""
      name="ridwan"
      status=""
      amount={200}
      onPress={() => null}
    />,
  );
  await waitFor(() => getByText('ridwan'));
  expect(getByText('ridwan')).toBeTruthy();
});

it('renders transaction correctly with pending status', async () => {
  const {getByText} = render(
    <TransactionList
      date=""
      name="ridwan"
      status="pending"
      amount={200}
      onPress={() => null}
    />,
  );

  await waitFor(() => getByText('pending'));
  expect(getByText('pending')).toBeTruthy();
});
