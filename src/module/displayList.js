import fetchList from './fetchList.js';

const displayList = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const category = await fetchList(url);

  const cardContainer = document.querySelector('.container-cards');
  cardContainer.innerHTML = '';
  const cards = category.categories.map((data) => `
<div class="card">
<img src=${data.strCategoryThumb} alt="The dish category">
<div class="card-about">
    <p class="card-name">
        ${data.strCategory}
    </p>
    <div class="like">
        <i class="fa-regular fa-heart"></i>
        <span class="like-count">10 likes</span>
    </div>
</div>
<div class="card-more">
    <button type="button" class="card-button" id=${data.idCategory}>Comments</button>
    <button type="button" class="card-button">Reservations</button>
</div>
</div>
`).join('');
  cardContainer.innerHTML = cards;
};

export default displayList;