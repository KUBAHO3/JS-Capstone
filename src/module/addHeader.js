const navigation = document.querySelector('header');

const addHeader = `<nav class="navigation-bar">
<div class="logo">
<div class="image"></div>
<h1><a href="#">KYMeal</a></h1>
</div>
<ul class="nav-links">
  <li><a href="#" id="categoriess">Categories</a></li>
  <li><a href="#">Recipes</a></li>
  <li><a href="#">About us</a></li>
</ul>
</nav>
`;

const addHeaderToPage = () => {
  navigation.insertAdjacentHTML('beforeend', addHeader);
};

export default addHeaderToPage;
