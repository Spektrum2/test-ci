import game from '../game';

test.each([
  ['health', { name: 'Маг', health: 51 }],
  ['wounded', { name: 'Воин', health: 16 }],
  ['critical', { name: 'Лучник', health: 14 }],
])('game testing', (expected, health) => {
  const result = game(health);
  expect(result).toBe(expected);
});
