import functions from './functions.js';

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});


test('User should be Olga Dubanevych object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Olga', lastName: 'Dubanevych' });
});

test('Check if name is Olga', () => {
  expect(functions.returnFirstName()).toMatch(/Olga/);
});

test('Alex should be in user names', () => {
  expect(functions.userNames()).toContain('Alex');
});

test('There should be no duplicate values in the list of cities', () => {
  expect(functions.cities()).toEqual([...new Set(functions.cities())]);
});

test('There should be no "Kyiv" in the cities list', () => {
  expect(functions.cities()).not.toContain('Kyiv');
});

test('There should be duplicate values in the list of user names', () => {
  expect(new Set(functions.newUserNames())).not.toEqual(functions.newUserNames());
});

test('Provinces should be only from the provinces list', () => {
  const provincesList = ['ON', 'QC', 'BC', 'NL', 'PE', 'NS', 'NB', 'MB', 'SK', 'AB', 'YT', 'NT', 'NU'];
  expect(functions.provinces()).toEqual(expect.arrayContaining(provincesList));
});

test('None of the following American states should be on the provinces list', () => {
  const americanStatesList = ['AL', 'AZ', 'CA', 'AR', 'CO', 'KS', 'KY', 'LA', 'NY', 'NC', 'OH', 'TX', 'WA'];
  expect(functions.provinces()).not.toEqual(expect.arrayContaining(americanStatesList));
});

test('There should be 3 users based on the number of user names', () => {
  expect(functions.userNames().length).toBe(3);
});

test('User has firstName and lastName properties', () => {
  const user = functions.createUser();
  expect(user).toHaveProperty('firstName');
  expect(user).toHaveProperty('lastName');
});

