import fetchList from './fetchList.js';

const displayList = async () => {
let url = `https://www.themealdb.com/api/json/v1/1/categories.php`

const category = await fetchList(url);
console.log("data: ",category.categories);


};

export default displayList;
