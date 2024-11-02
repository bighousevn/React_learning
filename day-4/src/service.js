import { API_KEY, getApiUser } from "./config";

export const getUser = async (id) => {
  const url = getApiUser(id);
  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      key: API_KEY,
    },
  });

  if (!res.ok) {
    alert("Not Found!!!");
  }

  return res.json();
};

export const addUser = async (payload) => {
  const url = getApiUser();
  const res = await fetch(url, {
    headers: {
      key: API_KEY,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    alert("Can not add!!!");
  }

  return getUser();
};

export const updateUser = async (payload) => {
  const url = getApiUser(payload.id);
  const res = await fetch(url, {
    headers: {
      key: API_KEY,
    },
    method: "PUT",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    alert("Can not update!!!");
  }

  return getUser();
};

export const deleteUser = async (id) => {
  const url = getApiUser(id);
  const res = await fetch(url, {
    headers: {
      key: API_KEY,
    },
    method: "DELETE",
  });

  if (!res.ok) {
    alert("Can not delete!!!");
  }

  return getUser();
};
