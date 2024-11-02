export const getApiImg = (gender, id) =>
  `https://mock.reactlms.com/img/${gender}/${id}.jpg`;

export const getApiUser = (id) =>
  "https://mock.reactlms.com/user/" + (id ? `?id=${id}` : "");

export const API_KEY = "jhcfkjgli";
