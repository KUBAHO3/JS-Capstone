import './style.css';
import addHeaderToPage from './module/addHeader.js';
import Modal from './module/displayPopup.js';
import displayList from './module/displayList.js';

displayList();
addHeaderToPage();

const openModal = document.querySelector('.modal');
const openModalButton = document.querySelector('.container-cards');
const overlay = document.getElementById('overlay');

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
