import React from "react";
import styles from "./CGV.module.scss";

export default function CGV() {
  return (
    <div className={`${styles.cgv}`}>
      <h1>Conditions Générales de Vente</h1>
      <p>
        Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble
        des transactions réalisées sur le site{" "}
        <strong>Chevaliers du Zodiaque UHC</strong> accessible à l'adresse{" "}
        <strong>https://cdz-fullstack.onrender.com</strong>. Toute commande
        passée via ce site implique l'acceptation sans réserve des présentes
        CGV.
      </p>
      <h2>Article 1 : Objet</h2>
      <p>
        Les présentes CGV ont pour objet de définir les droits et obligations
        des parties dans le cadre de la vente en ligne des produits ou services
        proposés par <strong>Chevaliers du Zodiaque UHC</strong>.
      </p>
      <h2>Article 2 : Identité de l’entreprise</h2>
      <p>
        Nom de l'entreprise : <strong>A définir</strong> <br />
        Siège social : <strong>A définir</strong> <br />
        Numéro d'enregistrement : <strong>A définir</strong> <br />
        Email : <strong>cdz.uhc@gmail.com</strong>
      </p>
      <h2>Article 3 : Produits et services</h2>
      <p>
        Les caractéristiques essentielles des produits ou services sont
        présentées sur le site{" "}
        <strong>https://cdz-fullstack.onrender.com</strong>. Le client est tenu
        de consulter ces caractéristiques avant toute commande.
      </p>
      <h2>Article 4 : Prix</h2>
      <p>
        Les prix des produits ou services sont indiqués en euros (€) toutes
        taxes comprises (TTC). <strong>Chevaliers du Zodiaque UHC</strong> se
        réserve le droit de modifier ses prix à tout moment, mais les produits
        seront facturés sur la base des tarifs en vigueur au moment de la
        validation de la commande.
      </p>
      <h2>Article 5 : Commandes</h2>
      <p>
        Toute commande passée sur le site{" "}
        <strong>https://cdz-fullstack.onrender.com</strong> est ferme et
        définitive après validation et paiement. Une confirmation de commande
        sera envoyée par email au client.
      </p>
      <h2>Article 6 : Modalités de paiement</h2>
      <p>
        Le paiement s’effectue via <strong>Stripe</strong>, une solution de
        paiement sécurisée. Les modes de paiement acceptés par{" "}
        <strong>Stripe</strong> incluent les cartes bancaires (Visa, MasterCard,
        American Express, etc.). Le paiement est exigible immédiatement à la
        commande. <br /> <br /> En validant sa commande, le client accepte les
        conditions générales d’utilisation de Stripe, disponibles sur le site
        officiel de Stripe (stripe.com).{" "}
        <strong>Chevaliers du Zodiaque UHC</strong> ne stocke aucune donnée
        bancaire du client, ces informations étant directement gérées par{" "}
        <strong>Stripe</strong>.
      </p>
      <h2>Article 7 : Livraison</h2>
      <p>
        Les livraisons sont effectuées à l'adresse indiquée lors de la commande.
        Les délais de livraison sont indiqués à titre indicatif et peuvent
        varier en fonction du transporteur.{" "}
        <strong>Chevaliers du Zodiaque UHC</strong> ne peut être tenu
        responsable des retards de livraison imputables à un tiers.
      </p>
      <h2>Article 8 : Rétractation et retour</h2>
      <p>
        Conformément aux dispositions de l'article L221-18 du Code de la
        consommation, le client dispose d'un droit de rétractation de 14 jours à
        compter de la réception de sa commande. Pour exercer ce droit, le client
        doit notifier sa décision par email à <strong>cdz.uhc@gmail.com</strong>{" "}
        et renvoyer les produits dans leur état d'origine.
      </p>
      <h2>Article 9 : Garanties et réclamations</h2>
      <p>
        Les produits bénéficient des garanties légales de conformité et des
        vices cachés. Pour toute réclamation, le client est invité à contacter
        le service client à <strong>cdz.uhc@gmail.com</strong>.
      </p>
      <h2>Article 10 : Protection des données personnelles</h2>
      <p>
        Les informations recueillies lors de la commande sont nécessaires pour
        la gestion des commandes et des relations commerciales. Conformément à
        la loi Informatique et Libertés du 6 janvier 1978, le client dispose
        d’un droit d’accès, de rectification et de suppression des données le
        concernant en contactant <strong>Chevaliers du Zodique UHC</strong> à{" "}
        <strong>cdz.uhc@gmail.com</strong>.
      </p>
      <h2>Article 11 : Droit applicable et litiges</h2>
      <p>
        Les présentes CGV sont soumises au droit français. En cas de litige, une
        solution amiable sera recherchée avant toute action judiciaire. À
        défaut, les tribunaux compétents seront ceux du ressort du siège social
        de <strong>Chevaliers du Zodique UHC</strong>.
      </p>
      <h2>Article 12 : Modification des CGV</h2>
      <p>
        <strong>Chevaliers du Zodique UHC</strong> se réserve le droit de
        modifier à tout moment les présentes CGV. Les conditions applicables
        sont celles en vigueur à la date de la commande.
      </p>
    </div>
  );
}
