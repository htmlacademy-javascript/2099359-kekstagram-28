import { isEscapeKey } from './util.js';
import { renderMiniatures, container } from './render.js';

const COMMENTS_BLOCK = 5;

const fullPictureElement = document.querySelector('.big-picture');
const onBigPictureElementClose = fullPictureElement.querySelector('.big-picture__cancel');
const bigPictureImgElement = fullPictureElement.querySelector('img');
const listComment = fullPictureElement.querySelector('.social__comments');
const commentItem = listComment.querySelector('.social__comment');
const commentsCount = fullPictureElement.querySelector('.social__comment-count');
const commentLoad = fullPictureElement.querySelector('.comments-loader');

let pictures = [];

let commentsLoaded = 0;
let comments = [];

const renderBigPhoto = ({url, description, likes}) => {
  bigPictureImgElement.src = url;
  bigPictureImgElement.alt = description;
  fullPictureElement.querySelector('.likes-count').textContent = likes;
  fullPictureElement.querySelector('.social__caption').textContent = description;
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onBigPhotoCloseElement();
  }
};

const renderComment = (({avatar, name, message}) => {
  const comment = commentItem.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});


const renderComments = () => {
  commentsLoaded += COMMENTS_BLOCK;

  if (commentsLoaded >= comments.length) {
    commentLoad.classList.add('hidden');
    commentsLoaded = comments.length;
  } else {
    commentLoad.classList.remove('hidden');
  }
  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < commentsLoaded; i++) {
    const commentElement = renderComment(comments[i]);
    commentsFragment.append(commentElement);
  }
  listComment.innerHTML = '';
  listComment.append(commentsFragment);
  commentsCount.innerHTML = `${commentsLoaded} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const showBigPicture = (picture) => {
  fullPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  renderBigPhoto(picture);
  comments = picture.comments;
  commentsLoaded = 0;
  renderComments();

  document.addEventListener('keydown', onPopupEscKeydown);
};

const onCommentsLoaderButtonClickElement = () => renderComments();

commentLoad.addEventListener('click', onCommentsLoaderButtonClickElement);

const onMiniatureClick = (evt) => {
  const targetMiniature = evt.target.closest('.picture');
  if (!targetMiniature) {
    return;
  }
  const targetMiniatureId = pictures.find((picture) =>
    picture.id === parseInt(targetMiniature.dataset.id, 10));
  showBigPicture(targetMiniatureId);
};

const renderPhotos = (currentPictures) => {
  pictures = currentPictures;
  renderMiniatures(pictures);
  container.addEventListener('click', onMiniatureClick);
};

function onBigPhotoCloseElement () {
  fullPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

onBigPictureElementClose.addEventListener('click', onBigPhotoCloseElement);

export { renderPhotos, showBigPicture, onBigPhotoCloseElement };
