import {generatePhoto} from './data.js';
import {renderPictureModal} from './gallery.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { uploadFileEditor, setUserFormSubmit} from './forms.js';
import { showErrorMessage, showSuccessMessage } from './messages.js';
uploadFileEditor();
renderPictureModal(generatePhoto());

setUserFormSubmit(async (data) => {
  try {
    await sendData(data);
    uploadFileEditor();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  renderPictureModal(data);
} catch (err) {
  showAlert(err.message);
}
