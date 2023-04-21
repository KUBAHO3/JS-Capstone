const countItems = () => {
  const allCards = document.querySelectorAll('.container-cards .card').length;
  let sum = 0;

  for (let i = 0; i <= allCards; i += 1) {
    sum = i;
  }
  const categoryTitle = document.querySelector('#categoriess');
  categoryTitle.innerHTML = `Categories(${sum})`;
};

export default countItems;