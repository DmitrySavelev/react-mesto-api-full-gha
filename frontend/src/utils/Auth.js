// export const BASE_URL = "http://localhost:3000/";
export const BASE_URL = "http://api.mesto.savelev.nomoredomains.monster/";

const handleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(handleResponse)
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(handleResponse)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      }
    });
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then(handleResponse)
};