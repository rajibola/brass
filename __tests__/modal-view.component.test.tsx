import {render} from '@testing-library/react-native';
import React from 'react';
import {ModalView} from 'shared';

jest.useFakeTimers();

it('if modal component shows touchable without full props', async () => {
  const {getByTestId} = render(<ModalView visible />);

  expect(getByTestId('touchable-opacity')).toBeTruthy();
});

it('if modal component does not show touchable with full props', async () => {
  const {queryByTestId} = render(<ModalView visible full />);

  expect(queryByTestId('touchable-opacity')).toBeNull();
});

it('if modal component renders onCLickExit correctly', async () => {
  const {queryByTestId} = render(<ModalView visible full />);
  const onClickExit = queryByTestId('touchable-opacity');
  onClickExit?.props.onPress();
  expect(onClickExit).toBeNull();
});
