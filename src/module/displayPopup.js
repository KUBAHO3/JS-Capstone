const openModal = document.querySelector('.modal');

const popup = `<div class="modal-head">
<div class="modal-image"></div>
<button class="close-button">&times;</button>
</div>
<div class="modal-content">
<h2 class="modal-title"></h2>
<p class="modal-description"></p>
<h3 class="comments">Comments<span class="no-of-comments"></span></h3>
<ul class="comments-lists"></ul>
<h4 class="add-comment">Add a comment</h4>
<form action="#">
  <input type="text" id="text" placeholder="Your name" />
  <textarea
    name="textarea"
    id="textarea"
    cols="30"
    rows="10"
    placeholder="Your insights"
  ></textarea>
  <button type="submit" class="received">Comment</button>
</form>
</div>
`;

const popupWindow = () => {
  openModal.insertAdjacentHTML('beforeend', popup);
};

export default popupWindow;