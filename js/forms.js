import { isEscapeKey } from './util.js';
import { validateCommentsField } from '../validation/validation.js';
import { validateTags } from '../validation/validation.js';
import { uploadFile, editorForm, editorCloseButton, pictureForm, hashtagText,
  commentsText, HASHTAG_ERROR_MESSAGE, COMMENTS_ERROR_MESSAGE, pristine } from '../validation/rules.js';

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
  validateTags,
  HASHTAG_ERROR_MESSAGE
);

//Описываем валидацию комментариев
pristine.addValidator(
  commentsText,
  validateCommentsField,
  COMMENTS_ERROR_MESSAGE
);

pictureForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
