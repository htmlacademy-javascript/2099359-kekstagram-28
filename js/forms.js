import { isEscapeKey } from './util.js';
import { validateLength } from './validation/validation.js';
import { HASHTAG_ERROR_MESSAGE, COMMENTS_ERROR_MESSAGE, MAX_COMMENTS_LENGTH, MAX_COUNT_HASTAG } from './validation/rules.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const uploadFile = document.querySelector('#upload-file');
const editorForm = document.querySelector('.img-upload__overlay');
const editorCloseButton = document.querySelector('#upload-cancel');
const pictureForm = document.querySelector('.img-upload__form');
const hashtagText = pictureForm.querySelector('.text__hashtags');
const commentsText = pictureForm.querySelector('.text__description');

const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper_error',
}
);

const onModalEscKeydown = (evt) => {
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


function closeEditor () {
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
  validateLength(MAX_COUNT_HASTAG),
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

export const uploadFileEditor = () => {
  uploadFile.addEventListener('change', openEditor);
};
