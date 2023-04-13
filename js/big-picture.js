import {isEscapeKey} from './util.js';


const fullPicture = document.querySelector('.big-picture');
const listComments = fullPicture.querySelector('.social__comments');
const elementListCopy = listComments.querySelector('li').cloneNode(true);
const body = document.querySelector('body');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const closeButton = fullPicture.querySelector('.big-picture__cancel');


const onEscape = (evt) => {
  if (isEscapeKey (evt)) {
    closeBigPicture();
  }
};

const renderNewComment = (comments) => {
  listComments.innerHTML = '';
  const commentFragment = document.createDocumentFragment();

  comments.forEach(({avatar, name, message}) => {
    const comment = elementListCopy.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    commentFragment.append(comment);
  });
  listComments.append(commentFragment);
};

const renderBigPicture = ({url, description, likes}) => {
  const bigPictureImgElement = fullPicture.querySelector('.big-picture__img img');
  bigPictureImgElement.src = url;
  bigPictureImgElement.alt = description;
  fullPicture.querySelector('.likes-count').textContent = likes;
  fullPicture.querySelector('.social__caption').textContent = description;
};


// оформлена в виде function, чтобы можно было совершать hoisting
function closeBigPicture () {
  fullPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onEscape);
}


export const showBigPicture = (picture) => {
  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscape);

  renderBigPicture(picture);
  renderNewComment(picture.comments);
};

