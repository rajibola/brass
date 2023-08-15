import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Preview} from 'shared';

jest.useFakeTimers();

const data: ITransferHistory = {
  amount: 0,
  createdAt: '',
  currency: '',
  domain: '',
  failures: null,
  id: 0,
  integration: 0,
  reason: '',
  reference: '',
  source: '',
  source_details: null,
  status: '',
  titan_code: null,
  transfer_code: '',
  transferred_at: null,
  updatedAt: '',
  recipient: {
    active: true,
    createdAt: '',
    currency: '',
    description: null,
    domain: '',
    email: null,
    id: 0,
    integration: 0,
    metadata: null,
    name: '',
    recipient_code: '',
    type: '',
    updatedAt: '',
    is_deleted: false,
    isDeleted: false,
    details: {
      authorization_code: null,
      account_number: '',
      account_name: '',
      bank_code: '',
      bank_name: '',
    },
  },
  session: {
    provider: null,
    id: null,
  },
  fee_charged: 0,
};

it('renders preview correctly', async () => {
  const {getByText} = render(<Preview data={data} onExit={() => null} />);
  // check if the component renders some text
  const text = await waitFor(() =>
    getByText(/Fund transfer from Ridwan Ajibola/i),
  );
  expect(text).toBeTruthy();
});
