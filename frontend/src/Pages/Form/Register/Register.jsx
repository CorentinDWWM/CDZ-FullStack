import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Register.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { signup } from "../../../apis/users";
import Modal from "../../../components/Modal/Modal";

export default function Register() {
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object({
    username: yup.string().required("Le champ est obligatoire"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/,
        "Email non valide"
      )
      .required("Le champ est obligatoire"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "trop court")
      .max(10, "trop long"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf([yup.ref("password"), ""], "Les mots ne correspondent pas"),
    rgpd: yup
      .boolean()
      .oneOf([true], "Vous devez accepter les termes et les conditions"),
  });

  //   valeurs par défaut
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rgpd: false,
  };

  //   méthodes utilisées par useForm et options : resolver fait le lien entre le formulaire et le schéma
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  //   fonction de validation de formulaire
  async function submit(values) {
    try {
      const response = await signup(values);
      setFeedback(response.message);
      if (response.message !== "Email déjà existant") {
        reset(defaultValues);
      }
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  }
  function handleCloseModal() {
    setShowModal(false);
    if (feedback !== "Email déjà existant") {
      navigate("/login");
    }
  }
  return (
    <>
      <h1>Inscription</h1>
      <hr className={`${styles.separation}`} />
      <form onSubmit={handleSubmit(submit)} className={`${styles.loginForm}`}>
        <p>Formulaire d'inscription</p>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="username" className="mb-10">
            Pseudo
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="mb-10"
          />
          {errors.username && (
            <p className="text-error">{errors.username.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="email" className="mb-10">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="mb-10"
          />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="password" className="mb-10">
            Mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="mb-10"
          />
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="confirmPassword" className="mb-10">
            Confirmation de mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            className="mb-10"
          />
          {errors.confirmPassword && (
            <p className="text-error">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="rgpd" className={`mb-10 ${styles.rgpd}`}>
            <input {...register("rgpd")} type="checkbox" id="rgpd" />
            <p>
              J'autorice ce site à conserver mes données personnelles transmises
              via ce formulaire. Aucune exploitation commerciale ne sera faite
              des données conservées. Voir notre{" "}
              <NavLink to="/rgpd">
                politique de gestion des données personnelles.
              </NavLink>
            </p>
          </label>
          {errors.rgpd && <p className="text-error">{errors.rgpd.message}</p>}
        </div>
        <div className={`${styles.divFin}`}>
          <button className={`btn btn-secondary ${styles.btnInscription}`}>
            Inscription
          </button>
          <NavLink to="/login" className={`${styles.clickable}`}>
            Déjà inscrit ?
          </NavLink>
        </div>
        <hr />
      </form>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          feedback={feedback}
          handleCloseModal={handleCloseModal}
        ></Modal>
      )}
    </>
  );
}
