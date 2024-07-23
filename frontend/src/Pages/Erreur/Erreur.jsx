import React from "react";
import styles from "./Erreur.module.scss";
import { NavLink } from "react-router-dom";
import death_screen from "../../assets/img/death_screen.png";

export default function Erreur() {
  return (
    <div className="d-flex center">
      <div className={`d-flex flex-column center ${styles.divErreur}`}>
        <img src={death_screen} alt="death screen saint seiya hades" />
        <h1>Cette erreur 404 vous a fait perdre connaissance</h1>
        <h2>Relevez vous pour la déesse Athéna !</h2>
        <hr className={`${styles.trait}`} />
        <NavLink to="/" className="btn btn-primary ta-center">
          Retour à l'accueil
        </NavLink>
      </div>
    </div>
  );
}
