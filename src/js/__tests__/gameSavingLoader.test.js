import GameSavingLoader from '../gameSavingLoader';

test('should load the game saving', async () => {
  const expectedSaving = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  const saving = await GameSavingLoader.load();
  expect(saving).toEqual(expectedSaving);
});

test('should handle error when loading the game saving', async () => {
  expect.assertions(1);
  try {
    await GameSavingLoader.load();
  } catch (err) {
    expect(err).toEqual(new Error('Failed to load game saving'));
  }
});
