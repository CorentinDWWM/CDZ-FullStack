import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export default function AdminUser({ children }) {
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const { token, user } = userStorage;
  return user && user.email === "cdz.uhc@gmail.com" ? (
    children
  ) : (
    <Navigate to="/" />
  );
}
