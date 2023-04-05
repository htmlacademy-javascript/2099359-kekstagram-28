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
