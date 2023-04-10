import { isEscapeKey } from './util.js';
import { validateLength } from './validation/validation.js';
import { HASHTAG_ERROR_MESSAGE, COMMENTS_ERROR_MESSAGE, MAX_COMMENTS_LENGTH, MAX_COUNT_HASTAG } from './validation/rules.js';

export const uploadFile = document.querySelector('#upload-file');
export const editorForm = document.querySelector('.img-upload__overlay');
export const editorCloseButton = document.querySelector('#upload-cancel');
export const pictureForm = document.querySelector('.img-upload__form');
export const hashtagField = pictureForm.querySelector('.text__hashtags');
export const descField = pictureForm.querySelector('.text__description');
export const hashtagText = pictureForm.querySelector('.text__hashtags');
export const commentsText = pictureForm.querySelector('.text__description');

export const pristine = new Pristine(pictureForm, {
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
