// итоговый массив
const dataBases = [];

// тексты комментариев
const messages = [
  'Всё отлично!', 'В целом всё неплохо.', 'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

// описания к фотографиям
const descriptions = [
  'Зимнее утро.', 'Сказочный закат.', 'Чудесный тёплый вечер',
  'Я и моя семья.', 'Подарок на 8 марта.', 'Прогулка в лесу.',
  'Поход в ресторан.'
];

// имена комментаторов
const names = [
  'Иван', 'Георгий', 'Олег', 'Роман',
  'Александр', 'Валентина', 'Олеся',
  'Евдокия', 'Дмитрий'
];

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


let commentId = 100;

const createComment = (commid) => ({
  id: commid,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElement(messages),
  name: getRandomElement(names)
});

const getRandomComments = (quantity) => {
  const comments = [];
  for (let idx = 1; idx <= quantity; idx++) {
    comments[idx - 1] = createComment(commentId++);
  }
  return comments;
};

const createPhoto = (idx) => ({
  id: idx,
  url: `photos/${idx}.jpg` ,
  description: getRandomElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: getRandomComments(getRandomInteger(1, 3))
});

const generatePhoto = () => {
  for (let idx = 1; idx <= 25; idx++){
    dataBases[idx - 1] = createPhoto(idx);
  }
};

generatePhoto();

