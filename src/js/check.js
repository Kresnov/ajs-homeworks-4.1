import number from './number';

export default function checking(x) {
  try {
    if (Number.isNaN(parseInt(x, 10)) || parseInt(x, 10) === 0) {
      return x;
    }
    throw new Error(`${x} не является числом`);
  } catch (e) {
    return (e);
  }
}

checking(number);
