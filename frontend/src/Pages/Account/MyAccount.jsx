import React, { useContext, useEffect, useState } from "react";
import styles from "./MyAccount.module.scss";
import { url } from "../../url";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function MyAccount() {
  const { id } = useParams();
  const [achats, setAchats] = useState(null);

  useEffect(() => {
    async function getAllUsersAchats() {
      try {
        const response = await fetch(`${url}/achats/${id}`);
        if (response.ok) {
          const achatsFromApi = await response.json();
          setAchats(achatsFromApi);
        }
      } catch (error) {
        console.error("Produit introuvable", error);
      }
    }
    getAllUsersAchats();
  }, [id]);
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
              <div>
                <p className={`${styles.categories}`}>Achat</p>
              </div>
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
