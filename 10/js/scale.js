const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const STEP = 25;

const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onButtonSmallerClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue - STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onButtonBiggerClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue + STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

buttonSmaller.addEventListener('click', onButtonSmallerClick);
buttonBigger.addEventListener('click', onButtonBiggerClick);

export { resetScale };
