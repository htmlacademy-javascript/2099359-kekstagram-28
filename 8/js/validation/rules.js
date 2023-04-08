// validation.js
export const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i; //Хэштег в форме регулярки
export const MAX_COUNT_HASTAG = 5;
export const MAX_COMMENTS_LENGTH = 140;
// forms.js
export const uploadFile = document.querySelector('#upload-file');
export const editorForm = document.querySelector('.img-upload__overlay');
export const editorCloseButton = document.querySelector('#upload-cancel');
export const pictureForm = document.querySelector('.img-upload__form');
export const hashtagField = pictureForm.querySelector('.text__hashtags');
export const descField = pictureForm.querySelector('.text__description');
export const hashtagText = pictureForm.querySelector('.text__hashtags');
export const commentsText = pictureForm.querySelector('.text__description');
export const HASHTAG_ERROR_MESSAGE = 'Не является хэштегом';
export const COMMENTS_ERROR_MESSAGE = 'Максимальная длина комментария 140 символов';

export const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper_error',
}
);
