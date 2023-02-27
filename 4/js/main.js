// итоговый массив
let dataBases = [];

// тексты комментариев
let messages = [
  'Всё отлично!', 'В целом всё неплохо.', 'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

// описания к фотографиям
let descriptions = [
  'Зимнее утро.', 'Сказочный закат.', 'Чудесный тёплый вечер',
  'Я и моя семья.', 'Подарок на 8 марта.', 'Прогулка в лесу.',
  'Поход в ресторан.'
];

// имена комментаторов
let names = [
  'Иван', 'Георгий', 'Олег', 'Роман',
  'Александр', 'Валентина', 'Олеся',
  'Евдокия', 'Дмитрий'
];

let getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let commentId = 100;
function getRandomComments(quantity){
  let comments = [];
  for (let idx = 1; idx <= quantity; idx++) {
    comments[idx - 1] = {
      id: commentId += 1,
      avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
      message: messages[getRandomInteger(0, messages.length - 1)],
      name: names[getRandomInteger(0, names.length - 1)],
    };
  }
  return comments;
}

const createRhoto = () => {
  for(let idx = 1; idx <= 25; idx++) {
    dataBases[idx - 1] = {
      id: idx,
      url: 'photos/' + idx + '.jpg' ,
      description: descriptions[getRandomInteger(0, descriptions.length - 1)],
      likes: getRandomInteger(15, 200),
      comments: getRandomComments(getRandomInteger(1, 3))
    };
  }
  console.log(dataBases)
};
createRhoto();

