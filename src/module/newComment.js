const newComment = (element, { date, name, comment }) => {
  const li = document.createElement('li');
  li.innerHTML = `<p>${date} ${name}: ${comment}</p>`;
  element.appendChild(li);
};

export default newComment;
