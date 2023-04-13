import {renderPictureModal} from './gallery.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import {initForm} from './forms.js';
import { getFiltersRender, getFiltersClassChange } from './sort.js';
import './avatar.js';
initForm();

try {
  const data = await getData();
  renderPictureModal(data);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  getFiltersClassChange();
  getFiltersRender(data);
} catch (err) {
  showAlert(err.message);
}
