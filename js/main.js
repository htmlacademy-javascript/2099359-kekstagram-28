import {generatePhoto} from './data.js';
import {renderPictureModal} from './gallery.js';
import { uploadFileEditor} from './forms.js';
uploadFileEditor();
renderPictureModal(generatePhoto());
