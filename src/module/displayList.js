import fetchList from './fetchList.js';
import { displayLike } from './aboutLikes.js';
import countItems from './countItems.js';

const displayList = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const urli = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gXvWpQoPOY3Cj1qr1TRg/likes';

  const category = await fetchList(url);
  const likesdata = await fetchList(urli);

  const cardContainer = document.querySelector('.container-cards');

  cardContainer.innerHTML = '';
  const cards = category.categories.map((data) => `
<div class="card">
<img src=${data.strCategoryThumb} alt="The dish category">
<div class="card-about">
    <p class="card-name">
        ${data.strCategory}
    </p>
    <div class="like" >
        <i class="fa-regular fa-heart" id=${data.idCategory}></i>
        <span class="like-count" id=${displayLike(data.idCategory, likesdata)}>${displayLike(data.idCategory, likesdata)} likes</span>
    </div>
</div>
<div class="card-more">
    <button type="button" class="card-button" id=${data.idCategory}>Comments</button>
    <button type="button" class="card-button1">Reservations</button>
</div>
</div>
`).join('');
  cardContainer.innerHTML = cards;
  countItems();
};

export default displayList;