import { setUserFormSubmit } from './validation/validation.js';
import { showAlert, debounce } from './util.js';
import { getData } from './api.js';
import { renderPhotos } from './big-picture.js';
import { onEditorClose } from './forms.js';
import { getFilteredPictures, init } from './sort.js';
import './avatar.js';

const RERENDER_DELAY = 500;

getData()
  .then((data) => {
    const debouncedRenderGallery = debounce(renderPhotos, RERENDER_DELAY);
    init(data, debouncedRenderGallery);
    renderPhotos(getFilteredPictures());
  })
  .catch((err) => {
    showAlert(err.message);
  });

setUserFormSubmit(onEditorClose);
