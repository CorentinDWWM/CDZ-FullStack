import React, { useContext, useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export default function Menu() {
  const { user } = useContext(UserContext);
  const [arrow, setArrow] = useState(false);

  // pour afficher le menu
  function handleMenu() {
    const myDropdown = document.getElementById("myDropdown");
    if (myDropdown && myDropdown.classList.contains("hide")) {
      myDropdown.classList.add("show");
      myDropdown.classList.remove("hide");
      setArrow(true);
    } else if (myDropdown && myDropdown.classList.contains("show")) {
      myDropdown.classList.add("hide");
      myDropdown.classList.remove("show");
      setArrow(false);
    }
  }

  useEffect(() => {
    // Pour fermer le menu si l'utilisateur clique en dehors

    function handleClickOutside(e) {
      if (
        !e.target.matches(`.${styles.dropbtn}`) &&
        !e.target.closest(`.${styles.menu}`)
      ) {
        const myDropdown = document.getElementById("myDropdown");
        if (myDropdown && myDropdown.classList.contains("show")) {
          myDropdown.classList.remove("show");
          myDropdown.classList.add("hide");
          setArrow(false);
        }
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`${styles.dropdown}`}>
        {user ? (
          <>
            <div
              id="divMenu"
              className={`${styles.menu} d-flex center`}
              onClick={handleMenu}
            >
              <p className={`${styles.dropbtn}`}>Utilisateur</p>
              {arrow ? (
                <i className="fa fa-caret-up"></i>
              ) : (
                <i className="fa fa-caret-down"></i>
              )}
            </div>
            <div className={`${styles.dropdownContent} hide`} id="myDropdown">
              {user.email === "cdz.uhc@gmail.com" ? (
                <NavLink
                  to="/admin-dashboard"
                  className={`${styles.btnNavConnected}`}
                >
                  Admin
                </NavLink>
              ) : (
                <NavLink
                  to={`/account/${user._id}`}
                  className={`${styles.btnNavConnected}`}
                >
                  Mon Compte
                </NavLink>
              )}
              <NavLink to="/logout" className={`${styles.btnNavConnected}`}>
                Déconnexion
              </NavLink>
            </div>
          </>
        ) : (
          <NavLink to="/login" className={`${styles.btnNav}`}>
            Connexion
          </NavLink>
        )}
      </div>
    </>
  );
}
