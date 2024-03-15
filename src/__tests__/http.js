import fetchData from '../http';

test('fetchData', () => {
  const result = () => {
    fetchData('https://server/user/1');
  };
  expect(result).toThrow(Error);
  expect(result).toThrow('Mock this! wrong url https://server/user/1');
});
