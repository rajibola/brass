import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Loader} from 'shared';

jest.useFakeTimers();

it('if loader component works correctly', async () => {
  const {getByText} = render(<Loader isLoading />);

  const view = await waitFor(() => getByText(/Loading.../i));
  expect(view).toBeTruthy();
});

it('if it renders correctly after passing strings of text', async () => {
  const {getByText} = render(<Loader isLoading="Component is loading..." />);

  const view = await waitFor(() => getByText(/Component is loading.../i));
  expect(view).toBeTruthy();
});
