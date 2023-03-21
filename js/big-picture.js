import {isEscapeKey} from './util.js';

const fullPicture = document.querySelector('.big-picture');
const listComments = fullPicture.querySelector('.social__comments');
const commentCopy = listComments.querySelector('li').cloneNode(true);
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const closeButton = fullPicture.querySelector('.big-picture__cancel');

const onEscape = (evt) => {
  if (isEscapeKey (evt)) {
    evt.preventDefault();
    fullPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const renderBigPicture = ({url, likes, comments, description}) => {
  fullPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  fullPicture.querySelector('.likes-count').textContent = likes;
  fullPicture.querySelector('.comments-count').textContent = comments.length;
  fullPicture.querySelector('.social__caption').textContent = description;
};
const renderNewComment = (arrayComment) => {
  const commentFragment = document.createDocumentFragment();

  arrayComment.forEach(({avatar, name, message}) => {
    commentCopy.querySelector('.social__picture').src = avatar;
    commentCopy.querySelector('.social__picture').alt = name;
    commentCopy.querySelector('.social__text').textContent = message;

    commentFragment.append(commentCopy);
  });
  listComments.append(commentFragment);
};

const closeBigPicture = () => {
  fullPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onEscape);
};

const showBigPicture = (picture) => {
  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscape);

  renderBigPicture(picture,renderNewComment(picture.comments));
};

export {showBigPicture};