import { useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useLoaderData } from "react-router-dom";
import { url } from "../../url";

export default function UserProvider({ children }) {
  const userConnected = useLoaderData();
  const [user, setUser] = useState(userConnected);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    if (userStorage) {
      const { token, user } = userStorage;
      if (isTokenValid(token)) {
        setUser(user);
      } else {
        logoutConnetedUser();
      }
    }

    if (user) {
      async function sendUserId() {
        try {
          const response = await fetch(`${url}/users`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-user-id": user.id,
            },
          });
          setPurchases(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des achats:", error);
        }
      }
      sendUserId();
    }
  }, []);

  function logoutConnetedUser() {
    localStorage.removeItem("user");
    setUser(null);
  }

  function setConnectedUser(userConnected) {
    setUser(userConnected);
  }

  function isTokenValid(token) {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken.exp * 1000 > new Date().getTime();
  }

  return (
    <UserContext.Provider
      value={{ user, setConnectedUser, logoutConnetedUser, purchases }}
    >
      {children}
    </UserContext.Provider>
  );
}
