const displaycomments = (element, comments) => {
  if (!comments.error) {
    comments.forEach((comment) => {
      const li = document.createElement('li');
      li.innerHTML = `<p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>`;
      element.appendChild(li);
    });
  }
};

export default displaycomments;