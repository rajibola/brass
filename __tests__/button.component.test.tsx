import {act, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Button} from 'shared';

jest.useFakeTimers();

it('renders search bar correctly', async () => {
  const {getByText} = render(
    <Button text="bu" data={['']} onPress={() => null} />,
  );
  const button = await waitFor(() => getByText(/bu/i));
  expect(button).toBeTruthy();
});
