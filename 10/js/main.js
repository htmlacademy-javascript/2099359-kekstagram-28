import {generatePhoto} from './data.js';
import {renderPictureModal} from './gallery.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { uploadFileEditor, closeEditor, setUserFormSubmit} from './forms.js';
uploadFileEditor();
renderPictureModal(generatePhoto());

const PHOTOS_COUNT = 25;

getData()
  .then((pictures) => {
    renderPictureModal(pictures.slice(0, PHOTOS_COUNT));
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(closeEditor);
