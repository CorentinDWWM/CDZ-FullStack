import React, { useEffect, useState } from "react";
import styles from "./Videos.module.scss";
import { url } from "../../url";

export default function Videos() {
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

  return (
    <>
      <h1>Vidéos</h1>
      <hr className={`${styles.separation}`} />
      <p className={`${styles.sous_titre}`}>
        Quand tu sortiras une vidéo sur ce mode de jeu,{" "}
        <strong>ta vidéo</strong> se retrouvera <strong>ci-dessous</strong>.
      </p>
      <div className="d-flex flex-column mt-50">
        {videos.map((video) => (
          <>
            <iframe
              className={`${styles.videos}`}
              src={`https://www.youtube.com/embed/${video.id_video}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.nom}
              key={video.id}
            ></iframe>
            <hr className={`${styles.separation_video}`} />
          </>
        ))}
      </div>
    </>
  );
}
