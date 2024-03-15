import fetchData from '../http';
import getLevel from '../getLevel';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel test', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 1,
  });
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('getLevel test', () => {
  fetchData.mockReturnValue({
    status: 'NotFound',
    level: 1,
  });
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
