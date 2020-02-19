import number from './number';

export default function checking(x) {
  try {
    if (Number.isInteger(x)) {
      return x;
    }
    throw new Error('Ввели не число в десятичной форме');
  } catch (e) {
    return (e);
  }
}

checking(number);
