const BASE_URL = "http://localhost:3000"

export const Posts = {
  all() {
    return fetch(`${BASE_URL}/posts`, {
      credentials: 'include'
    })
    .then(res => {
      return res.json();
    });
  },
  find(id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      credentials: "include"
    })
    .then(res => {
      return res.json();
    });
  },
  create(params) {
    return fetch(`${BASE_URL}/posts`, {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(res => {
      return res.json();
    })
  },
  update(params, id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(res => {
      return res.json();
    })
  },
  destroy(id) {
    return fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json())
  }
}

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/sessions`, {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(res => {
      return res.json();
    })
  },
  destroy() {
    return fetch(`${BASE_URL}/sessions`, {
      method: "DELETE",
      credentials: "include"
    })
    .then(res => {
      return res.json();
    })
  }
}

export const User = {
  current() {
    return fetch('http://localhost:3000/current_user', {
      credentials: "include"
    })
    .then(res => res.json())
  }
}