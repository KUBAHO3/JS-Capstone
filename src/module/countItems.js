const countItems = () => {
    var allCards = document.querySelectorAll('.container-cards .card').length
    var sum = 0;

    for (var i=0; i <= allCards; i++) {
        sum = i;
    }
    const categoryTitle = document.querySelector('#categoriess');
    categoryTitle.innerHTML = `Categories(${sum})`
}

export default countItems;