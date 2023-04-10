const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayItem = (array) => array[getRandomInteger(0,array.length - 1)];

const createIdGenerator = () => {
  let lastGenerateID = 0;

  return () => {
    lastGenerateID += 1;
    return lastGenerateID;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger};
export {getRandomArrayItem};
export {createIdGenerator};
export {isEscapeKey};
