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

test('Двоичные числа', () => {
  const testQuantity = '0b10000000000000000000000000000000';
  const received = сhecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});

test('Восьмеричные числа', () => {
  const testQuantity = '0755';
  const received = сhecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});

test('Шестнадцатиричные числа', () => {
  const testQuantity = '0xFFFFFFFFFFFFFFFFF';
  const received = сhecking(testQuantity);
  const expected = new Error('Полученные данные не являются числом в десятичной форме');
  expect(received).toEqual(expected);
});
