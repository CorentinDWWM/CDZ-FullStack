import styles from "./Header.module.scss";
import { useState } from "react";
import HeaderMobile from "./components/HeaderMobile";
import { NavLink } from "react-router-dom";
import Menu from "./Menu/Menu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <NavLink to="/" className={`${styles.logo}`}></NavLink>
      <nav className={`d-flex jc-around align-items-center ${styles.navBar}`}>
        <NavLink
          to="https://chevaliers-du-zodiaque-uhc.gitbook.io/chevaliers-du-zodiaque-uhc"
          target="_blank"
          className={`link ${styles.docs}`}
        >
          Docs
        </NavLink>
        <div className={`${styles.trait}`}></div>
        <NavLink to="/videos" className={`${styles.btnNav}`}>
          Vidéos
        </NavLink>
        <div className={`${styles.trait}`}></div>
        <NavLink to="/boutique" className={`${styles.btnNav}`}>
          Boutique
        </NavLink>
        <div className={`${styles.trait}`}></div>
        <NavLink to="/contact" className={`${styles.btnNav}`}>
          Contact
        </NavLink>
        <div className={`${styles.trait}`}></div>
        <Menu />
      </nav>
      <i
        onClick={() => setShowMenu(true)}
        className={`fas fa-bars mr-10 ${styles.mobileHeader}`}
      ></i>
      {showMenu && (
        <>
          <HeaderMobile setShowMenu={setShowMenu} />
        </>
      )}
    </header>
  );
}
