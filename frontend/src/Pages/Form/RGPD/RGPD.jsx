import React from "react";
import styles from "./RGPD.module.scss";

export default function RGPD() {
  return (
    <div className={`${styles.container}`}>
      <header>
        <h1>Politique de Confidentialité</h1>
      </header>
      <main>
        <section>
          <h2>Introduction</h2>
          <p>
            Bienvenue sur notre site web. Nous nous engageons à protéger votre
            vie privée. Cette politique de confidentialité explique comment nous
            collectons, utilisons et protégeons vos données personnelles.
          </p>
        </section>
        <section>
          <h2>Informations que nous collectons</h2>
          <ul>
            <li>
              Informations d'identification personnelles (nom, adresse e-mail,
              numéro de téléphone, etc.).
            </li>
            <li>
              Informations techniques (adresse IP, type de navigateur, etc.).
            </li>
            <li>
              Données de navigation (pages visitées, temps passé sur le site,
              etc.).
            </li>
          </ul>
        </section>
        <section>
          <h2>Utilisation des données</h2>
          <p>Nous utilisons les données collectées pour :</p>
          <ul>
            <li>Fournir et améliorer nos services.</li>
            <li>Communiquer avec vous.</li>
            <li>Analyser l'utilisation de notre site web.</li>
            <li>Respecter nos obligations légales.</li>
          </ul>
        </section>
        <section>
          <h2>Partage des données</h2>
          <p>
            Nous ne partageons pas vos données personnelles avec des tiers, sauf
            dans les cas suivants :
          </p>
          <ul>
            <li>Avec votre consentement explicite.</li>
            <li>Pour se conformer à une obligation légale.</li>
            <li>Pour protéger nos droits et notre sécurité.</li>
          </ul>
        </section>
        <section>
          <h2>Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et
            organisationnelles pour protéger vos données personnelles contre
            tout accès non autorisé, utilisation abusive, perte ou destruction.
          </p>
        </section>
        <section>
          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Accès à vos données personnelles.</li>
            <li>Rectification de vos données personnelles.</li>
            <li>Effacement de vos données personnelles.</li>
            <li>Limitation du traitement de vos données personnelles.</li>
            <li>Opposition au traitement de vos données personnelles.</li>
            <li>Portabilité de vos données personnelles.</li>
          </ul>
          <p>
            Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail
            suivante : [votre e-mail].
          </p>
        </section>
        <section>
          <h2>Modifications de cette politique</h2>
          <p>
            Nous pouvons mettre à jour cette politique de confidentialité de
            temps à autre. Toute modification sera publiée sur cette page. Nous
            vous encourageons à consulter cette politique régulièrement.
          </p>
        </section>
      </main>
    </div>
  );
}
