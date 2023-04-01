import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const editorForm = document.querySelector('.img-upload__overlay');
const editorCloseButton = document.querySelector('#upload-cancel');
const pictureForm = document.querySelector('.img-upload__form');
const hashtagField = pictureForm.querySelector('.text__hashtags');
const descField = pictureForm.querySelector('.text__description');


const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
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
  descField.addEventListener('focus', () => {
    document.removeEventListener('keydown', onModalEscKeydown);
  });

  descField.addEventListener('blur', () => {
    document.addEventListener('keydown', onModalEscKeydown);
  });
};

const openEditor = () => {
  editorForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
  deleteEscKeydownForHash();
  deleteEscKeydownForTextField();
};

uploadFile.addEventListener('change', openEditor);

function closeEditor () {
  editorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureForm.reset();

  document.removeEventListener('keydown', onModalEscKeydown);
}

editorCloseButton.addEventListener('click', closeEditor);


export { pictureForm };
