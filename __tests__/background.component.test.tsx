import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Background} from 'shared';

jest.useFakeTimers();

it('renders search bar correctly', async () => {
  const {getByText} = render(<Background text="Brass" variant="big" />);
  const view = await waitFor(() => getByText(/Brass/i));
  expect(view).toBeTruthy();
});
