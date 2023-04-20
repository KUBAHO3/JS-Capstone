import './style.css';
import addHeaderToPage from './module/addHeader.js';
import Modal from './module/displayPopup.js';
import displayList from './module/displayList.js';
import displaycomments from './module/displayComments.js';
import postComments from './module/postComments.js';
import newComment from './module/newComment.js';
import countComments from './module/countComments.js';
import fetchList from './module/fetchList.js';
import { updateLikes } from './module/aboutLikes.js';

displayList();
addHeaderToPage();
updateLikes();

const openModal = document.querySelector('.modal');
const openModalButton = document.querySelector('.container-cards');
const overlay = document.getElementById('overlay');

const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KTRp7FI3FBVZYfboByZV/comments';
const retrieveComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KTRp7FI3FBVZYfboByZV/comments?item_id=';

const loadComments = (id) => {
  fetchList(`${retrieveComment}${id}`).then((comment) => {
    const commentList = document.querySelector('.comments-lists');
    displaycomments(commentList, comment);

    const noOfComment = document.querySelector('.no-of-comments');
    const commentReturned = countComments(commentList);
    noOfComment.innerHTML = `(${commentReturned})`;
  });
};

const popupWindow = (id) => {
  if (openModal == null) return;
  openModal.classList.add('active');
  overlay.classList.add('active');
  Modal(id);
};

const closeWindow = () => {
  if (openModal == null) return;
  openModal.classList.remove('active');
  overlay.classList.remove('active');
};

openModalButton.addEventListener('click', (e) => {
  if (e.target.className === 'card-button') {
    popupWindow(e.target.id);
    loadComments(e.target.id);
  }
});

overlay.addEventListener('click', () => {
  const models = document.querySelectorAll('.modal.active');
  models.forEach((model) => {
    closeWindow(model);
  });
});

openModal.addEventListener('click', (e) => {
  if (e.target.className === 'close-button') {
    closeWindow();
  }
});

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  const today = new Date();
  const commentList = document.querySelector('.comments-lists');
  if (e.target.className === 'received') {
    const formName = document.querySelector('.name');
    const comment = document.querySelector('.comment');
    const form = document.querySelector('form');

    if (!(formName.value === '') || !(comment.value === '')) {
      postComments(commentUrl, e.target.id, formName.value, comment.value);
      newComment(commentList, {
        date: today.toLocaleDateString(),
        name: formName.value,
        comment: comment.value,
      });
      form.reset();
      const noOfComment = document.querySelector('.no-of-comments');
      const commentReturned = countComments(commentList);
      noOfComment.innerHTML = `(${commentReturned})`;
    }
  }
});
