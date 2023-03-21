const renderMiniatures = (renderData) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  const container = document.querySelector('.pictures');
  renderData.forEach(({url, likes, comments, id}) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnail.dataset.thumbnailId = id;
    fragment.appendChild(thumbnail);
  });
  return container.append(fragment);
};

export {renderMiniatures};

// const thumbnailPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// const containerPictures = document.querySelector('.pictures');

// const createThumbnailPicture = ({url, likes, comments, id}) => {
//   const thumbnailPicture = thumbnailPictureTemplate.cloneNode(true);

//   thumbnailPicture.querySelector('.picture__img').src = url;
//   thumbnailPicture.querySelector('.picture__likes').textContent = likes;
//   thumbnailPicture.querySelector('.picture__comments').textContent = comments.length;
//   thumbnailPicture.dataset.thumbnailId = id;

//   return thumbnailPicture;
// };

// const renderThumbnailPictures = (pictures) => {
//   const fragment = document.createDocumentFragment();
//   pictures.forEach((picture) => {
//     const thumbnailPicture = createThumbnailPicture(picture);
//     fragment.append(thumbnailPicture);
//   });
//   containerPictures.append(fragment);
// };

// export {renderThumbnailPictures, containerPictures};
