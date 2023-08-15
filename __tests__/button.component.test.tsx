import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Button} from 'shared';

jest.useFakeTimers();

it('renders button correctly', async () => {
  const {getByText} = render(
    <Button text="bu" dependencies={['']} onPress={() => null} />,
  );
  const button = await waitFor(() => getByText(/bu/i));
  expect(button).toBeTruthy();
});
