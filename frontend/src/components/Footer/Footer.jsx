import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import icone from "../../assets/img/iconeTemple.png";
import discord from "../../assets/img/discord.svg";

export default function Footer() {
  return (
    <footer className={`d-flex align-items-center ${styles.footer}`}>
      <img src={icone} alt="icone cdz" />
      <div className="d-flex flex-column justify-content-center">
        <Link to="/rgpd">Politique de confidentialité</Link>
        <Link to="/mentions_legales">Mentions Légales</Link>
      </div>
      <div className="d-flex align-items-center">
        <img src={discord} alt="discord" className={`${styles.discord}`} />
      </div>
    </footer>
  );
}

// https://discord.gg/Psh8Hvpj
// https://x.com/cdzuhc?t=xDX3w9gUw1yE_A5Gk8NamQ&s=09
// https://www.instagram.com/cdzuhc/
