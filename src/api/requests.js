const BASE_URL = "http://localhost:3000"

export const Posts = {
  all() {
    return fetch(`${BASE_URL}/posts`)
    .then(res => {
      return res.json()
    })
  }
}