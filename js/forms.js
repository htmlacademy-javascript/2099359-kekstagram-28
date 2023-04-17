import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { pristineReset } from './validation/validation.js';
import { getMessageType } from './messages.js';

const uploadFile = document.querySelector('#upload-file');
const editorFormElement = document.querySelector('.img-upload__overlay');
const editorCloseButtonElement = document.querySelector('#upload-cancel');
const imgForm = document.querySelector('.img-upload__form');
const hashtagField = imgForm.querySelector('.text__hashtags');
const commentField = imgForm.querySelector('.text__description');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const messageType = getMessageType();
    if (!messageType) {
      onEditorCloseElement();
    }
  }
};

const deleteEscKeydownForHash = () => {
  hashtagField.addEventListener('focus', () => {
    document.removeEventListener('keydown', onModalEscKeydown);
  });

  hashtagField.addEventListener('blur', () => {
    document.addEventListener('keydown', onModalEscKeydown);
  });
};

const deleteEscKeydownForTextField = () => {
  commentField.addEventListener('focus', () => {
    document.removeEventListener('keydown', onModalEscKeydown);
  });

  commentField.addEventListener('blur', () => {
    document.addEventListener('keydown', onModalEscKeydown);
  });
};

const onEditorOpenElement = () => {
  editorFormElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
  deleteEscKeydownForHash();
  deleteEscKeydownForTextField();
};

uploadFile.addEventListener('change', onEditorOpenElement);

function onEditorCloseElement () {
  editorFormElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetScale();
  resetEffects();
  imgForm.reset();
  pristineReset();

  document.removeEventListener('keydown', onModalEscKeydown);
}

editorCloseButtonElement.addEventListener('click', onEditorCloseElement);

export {
  imgForm,
  deleteEscKeydownForHash,
  deleteEscKeydownForTextField,
  onEditorCloseElement,
  onModalEscKeydown,
  uploadFile
};
