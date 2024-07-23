import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Boutique.module.scss";
import { url } from "../../url";

export default function Boutique() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProduit() {
      try {
        const response = await fetch(`${url}api/produits`);
        if (response.ok) {
          const productsFromApi = await response.json();
          setProducts(productsFromApi);
        }
      } catch (error) {
        console.error("Produit introuvable", error);
      }
    }
    getAllProduit();
  }, []);

  return (
    <>
      <h1>Boutique</h1>
      <hr className={`${styles.separation}`} />
      <ul className={`${styles.products}`}>
        {products.map((product) => (
          <li key={product._id} className={`${styles.article}`}>
            <div className={`${styles.logo}`}></div>
            <div className={`${styles.content}`}>
              <p>{product.name}</p>
              <NavLink
                className={`btn btn-secondary ta-center ${styles.btnAchat}`}
                to={`/boutique/produit/${product.id}`}
              >
                Acheter
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
