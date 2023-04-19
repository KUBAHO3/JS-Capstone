const postLike = async (url, itemId) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res;
  } catch (error) {
    return false;
  }
};
export default postLike;