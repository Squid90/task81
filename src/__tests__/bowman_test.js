import Bowman from '../bowman';

test('Проерка корректного создания персонажа с типом Bowman', () => {
  const bowman = new Bowman('Legolas', 'Bowman');
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});

test('Проерка создания персонажа c именем больше 10 символов', () => {
  const bowman = new Bowman('Legolas_very_long', 'Bowman');
  expect(bowman).toThrowError();
});

test('Проерка создания персонажа c именем менее 2 символов', () => {
  const bowman = new Bowman('L', 'Bowman');
  expect(bowman).toThrowError();
});

test('Проерка создания персонажа c отсутствующим типом', () => {
  const bowman = new Bowman('Legolas', 'Dwarf');
  expect(bowman).toThrowError();
});
