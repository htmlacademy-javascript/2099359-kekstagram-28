const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const STEP = 25;

const buttonSmallerElement = document.querySelector('.scale__control--smaller');
const buttonBiggerElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
export const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onButtonSmallerClickElement = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue - STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onButtonBiggerClickElement = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue + STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

buttonSmallerElement.addEventListener('click', onButtonSmallerClickElement);
buttonBiggerElement.addEventListener('click', onButtonBiggerClickElement);

export { resetScale };
