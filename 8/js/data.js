import { getRandomInteger , getRandomArrayElement, createIdGenerator} from './util.js';


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

const generateCommentId = createIdGenerator();


const createMessage = () =>
  Array.from({length: getRandomInteger(1,1.5)}, () =>
    getRandomArrayElement(messages)).join(' ');

const createComment = () => ({
  id : generateCommentId (),
  avatar : `img/avatar-${getRandomInteger(1,6)}.svg`,
  message : createMessage (),
  name : getRandomArrayElement(names)
});

const createPhoto = (idx) => ({
  id: idx,
  url: `photos/${idx}.jpg` ,
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(1,20)} , createComment),
});

const generatePhoto = () => {
  for (let idx = 1; idx <= 25; idx++){
    dataBases[idx - 1] = createPhoto(idx);
  }

  return dataBases;

};

export {generatePhoto, createComment};

