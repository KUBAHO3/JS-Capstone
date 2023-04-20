import fetchList from './fetchList.js';

const openModal = document.querySelector('.modal');

const Modal = async (id) => {
  openModal.innerHTML = '';

  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const category = await fetchList(url);

  const rightElement = (idi) => {
    const itemID = category.categories.filter((element) => element.idCategory === idi);
    return itemID[0];
  };

  const data = rightElement(id);

  const popup = `<div class="modal-head">
  <img src="${data.strCategoryThumb}" alt="" />
  <button class="close-button" data-close-button>&times;</button>
</div>
<div class="modal-content">
  <h2 class="modal-title">${data.strCategory}</h2>
  <p class="modal-description">${data.strCategoryDescription}</p>
  <h3 class="comments">Comments<span class="no-of-comments"></span></h3>
  <ul class="comments-lists"></ul>
  <h4 class="add-comment">Add a comment</h4>
  <form action="#">
    <input type="text" id="" name="" class="name" placeholder="Your name" />
    <textarea
      name=""
      id=""
      class="comment"
      cols="30"
      rows="10"
      placeholder="Your insights"
    ></textarea>
    <button type="submit" class="received" id=${data.idCategory}>Comment</button>
  </form>
</div>
`;

  openModal.insertAdjacentHTML('beforeend', popup);
};

export default Modal;