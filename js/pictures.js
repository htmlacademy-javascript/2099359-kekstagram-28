const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const pictureRenderFragment = document.createDocumentFragment();
const pictureContainer = document.querySelector('.pictures');

const createMiniatures = ({comments, likes, url}) => {
  const thumbnail = pictureTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__comments').textContent = comments;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  return thumbnail;

};

const renderMiniatures = (array) => {
  const fragment = document.createDocumentFragment();
  array.forEach((picture) => {
    const thumbnail = createMiniatures(picture);
    fragment.appendChild(thumbnail);
  });

  pictureContainer.appendChild(fragment);

};

export {renderMiniatures};
