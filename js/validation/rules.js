// validation.js
export const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i; //Хэштег в форме регулярки
export const MAX_COUNT_HASTAG = 5;
export const MAX_COMMENTS_LENGTH = 140;

export const HASHTAG_ERROR_MESSAGE = 'Не является хэштегом';
export const COMMENTS_ERROR_MESSAGE = 'Максимальная длина комментария 140 символов';


