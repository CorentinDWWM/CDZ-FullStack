import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import icone from "../../assets/img/iconeTemple.png";

export default function Footer() {
  return (
    <footer className={`d-flex align-items-center ${styles.footer}`}>
      <Link to="/">
        <img src={icone} alt="icone cdz" />
      </Link>
      <div className={"d-flex flex-column center"}>
        <Link to="/rgpd">Politique de confidentialité</Link>
        <Link to="/mentions_legales">Mentions Légales</Link>
      </div>
      <div className={`d-flex align-items-center ${styles.boxRS}`}>
        <Link
          to="https://discord.gg/Psh8Hvpj"
          className={`${styles.logoDS}`}
        ></Link>
        <Link
          to="https://www.instagram.com/cdzuhc/"
          className={`${styles.logoInsta}`}
        ></Link>
        <Link
          to="https://x.com/cdzuhc?t=xDX3w9gUw1yE_A5Gk8NamQ&s=09"
          className={`${styles.logoX}`}
        ></Link>
      </div>
    </footer>
  );
}
