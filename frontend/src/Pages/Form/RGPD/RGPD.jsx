import React from "react";
import styles from "./RGPD.module.scss";

export default function RGPD() {
  return (
    <div className={`${styles.container}`}>
      <header>
        <h1>Politique de Confidentialité</h1>
      </header>
      <hr className={`${styles.separation}`} />
      <main>
        <section>
          <h2>Introduction</h2>
          <p className="ta-center">
            Bienvenue sur le site du mode de jeu{" "}
            <strong>Chevaliers du Zodiaque UHC</strong>. Nous nous engageons à
            protéger <strong>votre vie privée</strong>. Cette politique de
            confidentialité explique comment nous <strong>collectons</strong>,{" "}
            <strong>utilisons</strong> et <strong>protégeons</strong> vos
            données personnelles.
          </p>
        </section>
        <hr className={`${styles.trait}`} />
        <section>
          <h2>Informations que nous collectons</h2>
          <ul>
            <li>
              Informations d'identification personnelles{" "}
              <strong>(e-mail)</strong>.
            </li>
            <li>
              Informations techniques{" "}
              <strong>(adresse IP, type de navigateur, etc.)</strong>.
            </li>
            <li>
              Données de navigation{" "}
              <strong>(pages visitées, temps passé sur le site, etc.)</strong>.
            </li>
          </ul>
        </section>
        <hr className={`${styles.trait}`} />
        <section>
          <h2>Utilisation des données</h2>
          <p>Nous utilisons les données collectées pour :</p>
          <ul style={{ fontWeight: "bold" }}>
            <li>Fournir et améliorer nos services.</li>
            <li>Communiquer avec vous.</li>
            <li>Analyser l'utilisation de notre site web.</li>
            <li>Respecter nos obligations légales.</li>
          </ul>
        </section>
        <hr className={`${styles.trait}`} />
        <section>
          <h2>Partage des données</h2>
          <p>
            Nous ne partageons pas vos données personnelles avec des tiers, sauf
            dans les cas suivants :
          </p>
          <ul style={{ fontWeight: "bold" }}>
            <li>Avec votre consentement explicite.</li>
            <li>Pour se conformer à une obligation légale.</li>
            <li>Pour protéger nos droits et notre sécurité.</li>
          </ul>
        </section>
        <hr className={`${styles.trait}`} />
        <section>
          <h2>Sécurité des données</h2>
          <p className="ta-center">
            Nous mettons en œuvre des mesures de{" "}
            <strong>sécurité techniques</strong> et{" "}
            <strong>organisationnelles</strong> pour protéger vos données
            personnelles contre tout accès <strong>non autorisé</strong>,{" "}
            <strong>utilisation abusive</strong>, <strong>perte</strong> ou{" "}
            <strong>destruction</strong>.
          </p>
        </section>
        <hr className={`${styles.trait}`} />
        <section>
          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul style={{ fontWeight: "bold" }}>
            <li>Accès à vos données personnelles.</li>
            <li>Rectification de vos données personnelles.</li>
            <li>Effacement de vos données personnelles.</li>
            <li>Limitation du traitement de vos données personnelles.</li>
            <li>Opposition au traitement de vos données personnelles.</li>
            <li>Portabilité de vos données personnelles.</li>
          </ul>
          <p className="ta-center">
            Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail
            suivante : <strong>[cdz.uhc@gmail.com]</strong>.
          </p>
        </section>
        <hr className={`${styles.trait}`} />
        <section>
          <h2>Modifications de cette politique</h2>
          <p className="ta-center">
            Nous pouvons mettre à jour{" "}
            <strong>cette politique de confidentialité</strong> de temps à
            autre. <strong>Toute modification</strong> sera publiée sur{" "}
            <strong>cette page</strong>. Nous vous encourageons à consulter
            cette politique <strong>régulièrement</strong>.
          </p>
        </section>
      </main>
    </div>
  );
}
