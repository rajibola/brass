import {getInitials} from 'utils';

//test getInitials function
describe('getInitials works correctly', () => {
  it('should return the first letter of the first and last name', () => {
    const name = 'John Doe';
    const expected = 'JD';
    const result = getInitials(name);
    expect(result).toEqual(expected);
  });
});

//test getInitials function by passing a string with no spaces
describe('getInitials with wrong input', () => {
  it('should return the first letter of the first and last name', () => {
    const name = 'JohnDoe';
    const expected = 'JD';
    const result = getInitials(name);
    expect(result).not.toEqual(expected);
  });
});
