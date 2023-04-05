import { HASHTAG, MAX_COMMENTS_LENGTH, MAX_COUNT_HASTAG } from './rules.js';

//Валидируем количество хэштегов
const validateTagsLength = (tags) => tags.length <= MAX_COUNT_HASTAG;

//Валидируем уникальность хэштегов
const validateUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return new Set(lowerCaseTags).size === lowerCaseTags.length;
};

//Валидируем остальные требования к тегу
const isValidTag = (tag) => HASHTAG.test(tag);

export const validateTags = (value) => {
  if (value === undefined || value.length === 0) {
    return true;
  }
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return validateTagsLength(tags) && validateUniqueTags(tags) && tags.every(isValidTag);
};

//Функция по валидации длины комментариев
export const validateCommentsField = (value) => value.length <= MAX_COMMENTS_LENGTH;


