const postLike = async (url, item_id) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: item_id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res.json();
  } catch (error) {
    return false;
  }
};
export default postLike;