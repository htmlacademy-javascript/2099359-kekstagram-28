import { imageElement } from './effects.js';
import { uploadFile } from './forms.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

uploadFile.addEventListener('change', () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imageElement .src = URL.createObjectURL(file);
  }
});
