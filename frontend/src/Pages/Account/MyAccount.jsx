import React, { useContext, useEffect, useState } from "react";
import styles from "./MyAccount.module.scss";
import { url } from "../../url";
import { UserContext } from "../../context/UserContext";

export default function MyAccount() {
  const [achats, setAchats] = useState([]);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllUsersAchats() {
      try {
        const response = await fetch(`${url}/userAchats/${user.email}`);
        if (response.ok) {
          const achatsFromApi = await response.json();
          setAchats(achatsFromApi);
        }
      } catch (error) {
        console.error("Produit introuvable", error);
      } finally {
        setLoading(false);
      }
    }
    getAllUsersAchats();
  }, []);

  if (loading) {
    return <p className="ta-center">Chargement en cours...</p>;
  } else {
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
                <p className={`${styles.categories}`}>Quantité</p>
                <div className={`${styles.trait}`}></div>
                <p className={`${styles.categories}`}>Date</p>
                <div className={`${styles.trait}`}></div>
                <p className={`${styles.categories}`}>Prix</p>
              </div>
              {achats.map((achat, index) => (
                <div className="d-flex jc-evenly" key={index}>
                  <p className={`${styles.textAchat}`}>{achat.name}</p>
                  <div className={`${styles.trait}`}></div>
                  <p className={`${styles.textAchat}`}>{achat.date}</p>
                  <div className={`${styles.trait}`}></div>
                  <p className={`${styles.textAchat}`}>{achat.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
