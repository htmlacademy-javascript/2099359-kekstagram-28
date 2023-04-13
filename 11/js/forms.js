import { isEscapeKey } from './util.js';
import { sendData } from './api.js';
import { validateLength, validateTags } from './validation/validation.js';
import { HASHTAG_ERROR_MESSAGE, COMMENTS_ERROR_MESSAGE, MAX_COMMENTS_LENGTH } from './validation/rules.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showErrorMessage, showSuccessMessage } from './messages.js';

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};
const uploadFile = document.querySelector('#upload-file');
const editorForm = document.querySelector('.img-upload__overlay');
const editorCloseButton = document.querySelector('#upload-cancel');
const pictureForm = document.querySelector('.img-upload__form');
const hashtagText = pictureForm.querySelector('.text__hashtags');
const commentsText = pictureForm.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper_error',
}
);

export const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};


const openEditor = () => {
  editorForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);

};


export function closeEditor () {
  pictureForm.reset();
  resetScale();
  resetEffects();
  editorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureForm.reset();

  document.removeEventListener('keydown', onModalEscKeydown);
}


editorCloseButton.addEventListener('click', closeEditor);


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

pictureForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

//Обработчик отправки формы
export const initForm = () => {
  pictureForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    const formData = new FormData(evt.target);

    if (isValid) {
      blockSubmitButton();
      sendData(formData)
        .then(() => {
          closeEditor();
          showSuccessMessage();
        })
        .catch(
          () => {
            showErrorMessage();
          }
        )
        .finally(unblockSubmitButton);
    }
  });
  const uploadFileEditor = () => {
    uploadFile.addEventListener('change', openEditor);
  };
  uploadFileEditor();
};
