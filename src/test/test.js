import сhecking from '../js/Check.js';

test('Число ли это', () => {
  const testQuantity = 7;
  const received = сhecking(testQuantity);
  const expected = 7;
  expect(received).toBe(expected);
});

test('Строка ли это', () => {
  const testQuantity = 'Слово';
  const received = сhecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});
