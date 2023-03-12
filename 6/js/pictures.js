import {dataBases } from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const container = document.querySelector('.pictures');
const renderData = dataBases;
const renderMiniatures = () => {
  renderData.forEach(({url, likes, comments}) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(thumbnail);
  });
  return container.append(fragment);
};

export {renderMiniatures};
