import React from 'react';
import {render} from '@testing-library/react-native';
import {CreatePayment} from 'screens';

it('renders correctly', () => {
  const {toJSON} = render(<CreatePayment />);
  expect(toJSON()).toMatchSnapshot();
});
