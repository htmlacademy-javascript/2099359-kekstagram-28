import { HASHTAG, MAX_COUNT_HASTAG} from './rules.js';

const validateUniqueTags = (tags) => {
  const lowerCaseTags = tags.map.split('')((tag) => tag.toLowerCase());
  return new Set(lowerCaseTags).size === lowerCaseTags.length;
};

export const validateLength = (maxLength) => (iter) => iter.length <= maxLength;

export const converStringToArrayAndValidateLength = (maxLength) => (str) => str.split(' ').length <= maxLength;

const isValidTag = (tag) => HASHTAG.test(tag);

export const validateTags = (value) => {
  if (value === undefined || value.length === 0) {
    return true;
  }
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return validateLength(MAX_COUNT_HASTAG,tags) && validateUniqueTags(tags) && tags.every(isValidTag);
};
