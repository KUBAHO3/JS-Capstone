import postLike from './postLike.js';

const urli = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gXvWpQoPOY3Cj1qr1TRg/likes';

const displayLike = (id, likesdata) => {
  const itemsID = likesdata.filter((element) => element.item_id === id);
  return itemsID[0].likes ? itemsID[0].likes : 0;
};

const updateLikes = () => {
  const cardContainer = document.querySelector('.container-cards');

  cardContainer.addEventListener('click', (e) => {
    if (e.target.className === 'fa-regular fa-heart') {
      postLike(urli, e.target.id);
      const newlike = Number(e.target.nextElementSibling.id) + 1;
      e.target.nextElementSibling.innerHTML = `${newlike.toString()} likes`;
      e.target.nextElementSibling.id = newlike.toString();
    }
  });
};

export {
  displayLike,
  updateLikes,
};