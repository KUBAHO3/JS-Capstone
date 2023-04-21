import countComments from '../countComments.js';

test('count items', () => {
  document.body.innerHTML = `<ul class="comments-lists">
                                <p>12/03/2021 Lawrence: I love meat</p>
                                <p>12/05/2023 Kenny: Cool show</p>
                                <p>12/03/2021 Heaven: Dessert are the best</p>
                                <p>1/08/2022 Sammy: Nothing beats chicken</p>
                            </ul>`;
  const myListOfComments = document.querySelector('.comments-lists');
  const nbOfComments = countComments(myListOfComments);
  expect(nbOfComments).toBe(4);
});
test('count 0 items', () => {
  document.body.innerHTML = `<ul class="comments-lists">
                                
                            </ul>`;
  const myListOfComments = document.querySelector('.comments-lists');
  const nbOfComments = countComments(myListOfComments);
  expect(nbOfComments).toBe(0);
});