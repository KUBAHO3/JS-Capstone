import fetchList from './fetchList.js';

const displayList = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const urli = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gXvWpQoPOY3Cj1qr1TRg/likes';

  const category = await fetchList(url);
  const likesdata = await fetchList(urli);

  function displayLike(id) {
    const itemsID = likesdata.filter((element) => element.item_id === id);
    return itemsID[0].likes ? itemsID[0].likes : 0;
  }

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
        <span class="like-count">${displayLike(data.idCategory)} likes</span>
    </div>
</div>
<div class="card-more">
    <button type="button" class="card-button">Comments</button>
    <button type="button" class="card-button">Reservations</button>
</div>
</div>
`).join('');
  cardContainer.innerHTML = cards;
};

export default displayList;
