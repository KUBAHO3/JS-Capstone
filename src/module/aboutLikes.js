import postLike from './postLike.js';
import fetchList from './fetchList.js';


const urli = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gXvWpQoPOY3Cj1qr1TRg/likes';


const displayLike = (id, likesdata) => {
    const itemsID = likesdata.filter((element) => element.item_id === id);
    console.log(itemsID[0].likes);
    return itemsID[0].likes ? itemsID[0].likes : 0;
  }

function updateLikes(){
  const cardContainer = document.querySelector('.container-cards');
      
  cardContainer.addEventListener("click", (e) => {
    if(e.target.className === 'fa-regular fa-heart'){
      postLike(urli, e.target.id);
      console.log('clicked: ',e.target.id);
    }
  });

}

export {
    displayLike,
    updateLikes
}