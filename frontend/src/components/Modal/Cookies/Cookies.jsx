import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from "./Cookies.module.scss";

const CookieBanner = () => (
  <CookieConsent
    location="bottom"
    buttonText="J'accepte"
    buttonClasses={`${styles.cookieBtn}`}
    declineButtonText="Je refuse"
    declineButtonClasses={`${styles.cookieBtn}`}
    enableDeclineButton
    cookieName="CDZCookies"
    style={{ background: "#CD3A84" }}
    containerClasses={`${styles.containerTest}`}
    buttonWrapperClasses={`${styles.cookieBtnBox}`}
    buttonStyle={{
      backgroundColor: "var(--pink-1)",
      color: "black",
      fontSize: "14px",
    }}
    declineButtonStyle={{
      backgroundColor: "var(--pink-1)",
      color: "black",
      fontSize: "14px",
    }}
    expires={150}
  >
    Ce site utilise des cookies pour améliorer votre expérience.{" "}
    <a
      href="/rgpd"
      style={{
        color: "#fff",
        textDecoration: "underline",
        marginLeft: "5px",
      }}
    >
      En savoir plus
    </a>
  </CookieConsent>
);

export default CookieBanner;
