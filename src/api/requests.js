const BASE_URL = "http://localhost:3000"

export const Posts = {
  all() {
    return fetch(`${BASE_URL}/posts`)
    .then(res => {
      return res.json();
    });
  },
  find(id) {
    return fetch(`${BASE_URL}/posts/${id}`)
    .then(res => {
      return res.json();
    });
  }
}