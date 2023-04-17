const pictureElement = document.querySelector('#picture').content.querySelector('.picture');
export const container = document.querySelector('.pictures');

const createThumbnail = ({ url, description, likes, comments, id }) => {
  const thumbnail = pictureElement.cloneNode(true);
  const pictureImg = thumbnail.querySelector('.picture__img');

  pictureImg.src = url;
  pictureImg.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.id = id;

  return thumbnail;
};

const renderMiniatures = (thumbnails) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  thumbnails.forEach((thumbnail) => {
    fragment.append(createThumbnail(thumbnail));
  });
  container.append(fragment);
};

export {renderMiniatures};
