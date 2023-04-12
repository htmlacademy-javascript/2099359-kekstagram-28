import {renderPictureModal} from './gallery.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { initForm} from './forms.js';
initForm();

try {
  const data = await getData();
  renderPictureModal(data);
} catch (err) {
  showAlert(err.message);
}
