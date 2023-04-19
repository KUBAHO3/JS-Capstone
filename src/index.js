import './style.css';
import addHeaderToPage from './module/addHeader.js';
import displayList from './module/displayList.js';
// import countItems from './module/countItems.js';
import { updateLikes } from './module/aboutLikes.js';

addHeaderToPage();
displayList();

updateLikes();
// countItems();
