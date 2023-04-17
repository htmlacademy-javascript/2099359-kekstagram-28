import { sendData } from '../api.js';
import { showSuccessMessage, showErrorMessage } from '../messages.js';
import { onEditorCloseElement } from '../forms.js';
import { MAX_COUNT_HASHTAGS,HASHTAG_ERROR_MESSAGE, COMMENTS_ERROR_MESSAGE, MAX_COMMENTS_LENGTH } from './rules.js';
const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i; //Хэштег в форме регулярки

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const imgForm = document.querySelector('.img-upload__form');
const hashtagText = imgForm.querySelector('.text__hashtags');
const commentsText = imgForm.querySelector('.text__description');
const SubmitButtonElement = document.querySelector('.img-upload__submit');


const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper_error',
}
);

export const validateLength = (maxLength) => (iter) => iter.length <= maxLength;

const validateUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return new Set(lowerCaseTags).size === lowerCaseTags.length;
};

const isValidTag = (tag) => HASHTAG.test(tag);

const validateTags = (value) => {
  if (value.length === 0) {
    return true;
  }
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return validateLength(MAX_COUNT_HASHTAGS)(tags) && validateUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagText,
  validateTags,
  HASHTAG_ERROR_MESSAGE
);

pristine.addValidator(
  commentsText,
  validateLength(MAX_COMMENTS_LENGTH),
  COMMENTS_ERROR_MESSAGE
);

const blockSubmitButtonElement = () => {
  SubmitButtonElement.disabled = true;
  SubmitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButtonElement = () => {
  SubmitButtonElement.disabled = false;
  SubmitButtonElement.textContent = SubmitButtonText.IDLE;
};

const pristineReset = () => pristine.reset();
const setUserFormSubmit = () => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    const formData = new FormData(evt.target);

    if (isValid) {
      blockSubmitButtonElement();
      sendData(formData)
        .then(() => {
          onEditorCloseElement();
          showSuccessMessage();
        })
        .catch(
          () => {
            showErrorMessage();
          }
        )
        .finally(unblockSubmitButtonElement);
    }
  });
};

export { setUserFormSubmit, pristineReset };

