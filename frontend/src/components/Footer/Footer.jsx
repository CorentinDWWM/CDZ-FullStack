import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`d-flex align-items-center ${styles.footer}`}>
      <NavLink
        to="https://discord.gg/Psh8Hvpj"
        target="_blank"
        className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}
      >
        <i className={`fa-brands fa-discord ${styles.icon}`}></i>
        <p>Discord</p>
      </NavLink>
      <NavLink
        to="https://x.com/cdzuhc?t=xDX3w9gUw1yE_A5Gk8NamQ&s=09"
        target="_blank"
        className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}
      >
        <i className={`fa-brands fa-x-twitter ${styles.icon}`}></i>
        <p> X </p>
      </NavLink>
      <NavLink
        to="https://www.instagram.com/cdzuhc/"
        target="_blank"
        className={`d-flex jc-evenly align-items-center ${styles.btnNav}`}
      >
        <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
        <p>Instagram</p>
      </NavLink>
    </footer>
  );
}
