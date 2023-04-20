import countItems from './countItems.js';

describe('countItems', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container-cards">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
      <h2 id="categoriess"></h2>
    `;
  });

  test('updates category title with correct count', () => {
    countItems();

    const categoryTitle = document.querySelector('#categoriess');
    expect(categoryTitle.textContent).toBe('Categories(3)');
  });

  test('does not update category title if no cards are present', () => {
    document.body.innerHTML = `
      <div class="container-cards"></div>
      <h2 id="categoriess"></h2>
    `;

    countItems();

    const categoryTitle = document.querySelector('#categoriess');
    expect(categoryTitle.textContent).toBe('Categories(0)');
  });
});
