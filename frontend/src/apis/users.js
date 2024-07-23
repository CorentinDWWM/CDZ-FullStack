import { url } from "../url";

const BASE_URL = "http://localhost:5000/api";

export async function signup(values) {
  try {
    const response = await fetch(`${url}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const message = await response.json();
    return message;
  } catch (error) {
    console.error(error);
  }
}

export async function verifyMail(values) {
  try {
    const response = await fetch(`${url}/users/verifyMail/${values}`);
    const message = await response.json();
    return message;
  } catch (error) {
    console.error(error);
  }
}

export async function signin(values) {
  try {
    const response = await fetch(`${url}/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error(error);
  }
}

export async function forgotPassword(values) {
  console.log(values);
  try {
    const response = await fetch(`${url}/users/forgotPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values }),
    });
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
  }
}

export async function resetPassword(values) {
  console.log(values);
  try {
    const response = await fetch(`${url}/users/resetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
  }
}

export function getUserConnected() {
  if (localStorage.getItem("user")) {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    return userStorage.user;
  } else {
    return null;
  }
}

export async function getAllProduits() {
  try {
    const response = await fetch(`${url}/produits`);
    const message = await response.json();
    return message;
  } catch (error) {
    console.error(error);
  }
}
