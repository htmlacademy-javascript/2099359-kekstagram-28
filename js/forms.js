import { isEscapeKey } from './util.js';
import { validateLength } from './validation/validation.js';
import { uploadFile, editorForm, editorCloseButton, pictureForm, hashtagText,
  commentsText, HASHTAG_ERROR_MESSAGE, COMMENTS_ERROR_MESSAGE, pristine, MAX_COMMENTS_LENGTH, MAX_COUNT_HASTAG } from './validation/rules.js';

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

uploadFile.addEventListener('change', openEditor);


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

//Описываем валидацию комментариев
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
