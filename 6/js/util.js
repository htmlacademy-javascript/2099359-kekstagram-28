const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (arr) => {
  const idx = getRandomInteger(0, arr.length - 1);
  return arr[idx];
};

export { getRandomInteger, getRandomElement };
