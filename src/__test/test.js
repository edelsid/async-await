import GameSavingLoader from '../app';

test('reading data', async () => {
  const result = await GameSavingLoader.load();
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});

test('error test', async () => {
  expect.assertions(1);
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toEqual('oops');
  }
});
