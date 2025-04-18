import styles from "./Accueil.module.scss";
import athena from "../../assets/img/Athena.gif";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { url } from "../../url";

export default function Accueil() {
  const [videos, setVideos] = useState([]);

  // pour récupérer les vidéos
  useEffect(() => {
    async function getAllVideos() {
      try {
        const response = await fetch(`${url}/videos`);
        if (response.ok) {
          const videosFromApi = await response.json();
          setVideos(videosFromApi);
        }
      } catch (error) {
        console.error("Vidéo introuvable", error);
      }
    }
    getAllVideos();
  }, []);

  useEffect(() => {
    async function syncPurchases() {
      try {
        const response = await fetch(`${url}/achats/syncPurchases`);
        if (response.ok) {
          await response.json();
          console.log("Achats synchronisés");
        }
      } catch (error) {
        console.error("Erreur de sync :", error);
      }
    }
    // fetch("/api/achats/syncPurchases")
    //   .then((res) => res.json() && console.log("Achats synchronisés"))
    //   .catch((err) => console.error("Erreur de sync :", err));
    syncPurchases();
  }, []);

  return (
    <>
      <section
        className={`d-flex flex-column align-items-center ${styles.first_part}`}
      >
        <div className={`d-flex ${styles.intro}`}>
          <div className={`d-flex flex-column ${styles.text_left}`}>
            <div className={`${styles.text_bloc}`}>
              <div className={`${styles.start}`}>
                <h1>Chevaliers du Zodiaque UHC</h1>
                <p>
                  Développé par <strong>N3wSonic</strong>
                </p>
              </div>
              <p>
                <strong>Le Chevalier des Zodiaque UHC</strong> est un
                <strong> mode de jeu</strong> à rôle basé
                <strong> stratégie et pvp </strong>
                avec plus de <strong>40 rôles</strong> repartis en
                <strong> 3 camps</strong>.
              </p>
              <p>
                En plus de ces camps, il existe des
                <strong> rôles neutres </strong>
                qui devront gagner <strong>seul</strong> ou en
                <strong> très petite équipe.</strong>
              </p>
              <p>
                Vous retrouverez ci-dessous une liste de vidéos du mode de jeu.
              </p>
              <p>
                <strong>
                  <span>Attention</span>
                </strong>
                , le mode de jeu bénéficie de
                <strong> mises à jour régulières</strong> il est alors possible
                que certains pouvoirs ou rôles soient
                <strong> complètement modifiés.</strong>
              </p>
            </div>
          </div>
          <img src={athena} alt="gif athena" className={`${styles.gif}`} />
        </div>
        <NavLink to="/boutique" className="btn btn-primary ta-center">
          Acheter des parties
        </NavLink>
      </section>
      <hr className={`${styles.trait}`} />
      <section className={`d-flex flex-column align-items-center`}>
        <h2>Vidéos</h2>
        <p className="text_intro">
          Quand tu sortiras une vidéo sur ce mode de jeu, <br />
          <strong> ta vidéo</strong> se retrouvera <strong> ci-dessous</strong>.
        </p>
        <div className="d-flex flex-column mt-50">
          {videos.map((video) => (
            <div key={video.id}>
              <iframe
                className={`${styles.videos}`}
                src={`https://www.youtube.com/embed/${video.id_video}?autoplay=0`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.nom}
                key={video.id}
              ></iframe>
              <p style={{ textAlign: "center" }}>
                Vidéo par <strong>{video.createur}</strong>
              </p>
              <hr className={`${styles.separation_video}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
