import {showBigPicture} from './big-picture.js';
import { renderMiniatures } from './render.js';
const container = document.querySelector('.pictures');

const renderPictureModal = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnailPicture = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnailPicture) {
      return;
    }
    const thumbnail = pictures.find (
      (item) => item.id === +thumbnailPicture.dataset.thumbnailId
    );
    showBigPicture(thumbnail);
  });
  renderMiniatures(pictures);
};


export {renderPictureModal};
