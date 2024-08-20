import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Produit.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import { UserContext } from "../../../context/UserContext";
import { url } from "../../../url";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getProduit() {
      try {
        const response = await fetch(`${url}/produits/${id}`);
        if (response.ok) {
          const productFromApi = await response.json();
          setProduct(productFromApi);
        }
      } catch (error) {
        console.error("Produit introuvable", error);
      }
    }
    getProduit();
  }, [id]);

  if (!product) {
    return <div>Chargement...</div>;
  }

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PV8fgDQ9zSY6LNNpi0k8aCiGBkh7qfVmSah0wzDGD4rac52KL4YLmmi4UhH0oteMmxEilOOcAutDhm2WZE30tOv00FA1TFqwQ"
    );
    const response = await fetch(
      `${url}/produits/${product.id}/createcheckout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: product,
          user: user,
        }),
      }
    );
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <>
      <h1>Achat</h1>
      <hr className={`${styles.separation}`} />
      <div className={`${styles.article}`}>
        <div className={`${styles.logo}`}></div>
        <div className={`${styles.content}`}>
          <p>{product.description}</p>
          {user ? (
            <button
              onClick={makePayment}
              className={`btn btn-secondary ta-center ${styles.btnAchat}`}
            >
              Confirmer l'achat
            </button>
          ) : (
            <NavLink
              to="/login"
              className={`btn btn-secondary ta-center ${styles.btnAchat}`}
            >
              Confirmer l'achat
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
