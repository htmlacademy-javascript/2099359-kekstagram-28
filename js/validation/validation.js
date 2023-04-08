import { HASHTAG, MAX_COUNT_HASTAG} from './rules.js';

//Валидируем уникальность хэштегов
const validateUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return new Set(lowerCaseTags).size === lowerCaseTags.length;
};

export const validateLength = (maxLength) => (iter) => iter.length <= maxLength;


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
  return validateLength(MAX_COUNT_HASTAG) && validateUniqueTags(tags) && tags.every(isValidTag);
};
