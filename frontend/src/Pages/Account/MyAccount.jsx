import React from "react";
import styles from "./MyAccount.module.scss";

export default function MyAccount() {
  return (
    <div className={`${styles.page}`}>
      <h1 className="ta-center mt-70">Mon compte</h1>
      <hr className={`${styles.trait_1} ${styles.separation}`} />
      <p className="ta-center" style={{ fontSize: "24px" }}>
        Bienvenue sur votre compte, ici vous pourrez voir l'historique de vos
        achats de parties <br /> de Chevaliers du Zodiaque UHC
      </p>
      <hr className={`${styles.trait_2} ${styles.separation}`} />
      <div className="d-flex flex-column center">
        <div>
          <h2 className={`${styles.titre_achat}`}>Historique des achats</h2>
          <div className={`${styles.account_box}`}>
            <div className="d-flex jc-between align-items-center">
              <p className={`${styles.categories}`}>Achat</p>
              <div className={`${styles.trait}`}></div>
              <p className={`${styles.categories}`}>Quantité</p>
              <div className={`${styles.trait}`}></div>
              <p className={`${styles.categories}`}>Date</p>
              <div className={`${styles.trait}`}></div>
              <p className={`${styles.categories}`}>Prix</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
