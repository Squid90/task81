import Team from '../game';

test('Проверка добавления персонажа в команду', () => {
  const expectedTeam = new Set(['Gendalf']);
  const currentTeam = new Team();
  currentTeam.add('Gendalf');
  expect(expectedTeam).toEqual(currentTeam.members);
});

test('Проверка добавления дублирующегося персонажа в команду', () => {
  const currentTeam = new Team();
  currentTeam.add('Gendalf');
  expect(() => currentTeam.add('Gendalf')).toThrow();
});

test('Проверка добавления несколько персонажей в команду', () => {
  const expectedTeam = new Set(['Gendalf', 'Legolas', 'Aragorn', 'Gimli']);
  const currentTeam = new Team();
  currentTeam.addAll(['Gendalf', 'Legolas', 'Aragorn', 'Gimli', 'Gendalf', 'Legolas', 'Aragorn', 'Gimli']);
  expect(expectedTeam).toEqual(currentTeam.members);
});

test('Проверка преобразование контейнера в массив', () => {
  const expectedTeam = ['Gendalf', 'Legolas', 'Aragorn', 'Gimli'];
  const currentTeam = new Team();
  currentTeam.addAll(['Gendalf', 'Legolas', 'Aragorn', 'Gimli', 'Gendalf', 'Legolas', 'Aragorn', 'Gimli']);
  expect(expectedTeam).toEqual(currentTeam.toArray());
});
