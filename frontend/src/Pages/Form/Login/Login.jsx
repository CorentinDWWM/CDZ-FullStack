import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { signin } from "../../../apis/users";
import Modal from "../../../components/Modal/Modal";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export default function Login() {
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { setConnectedUser } = useContext(UserContext);
  const [user, setUser] = useState();

  const schema = yup.object({
    email: yup
      .string()
      .email()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,4}$/,
        "Email non valide"
      )
      .required("Le champ est obligatoire"),
    password: yup.string().required("Le mot de passe est obligatoire"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

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
    console.log(values);
    try {
      const response = await signin(values);
      if (!response.message) {
        localStorage.setItem("user", JSON.stringify(response));
        setUser(response.user);
        setTimeout(() => {
          setConnectedUser(response.user);
        }, 2000);
        setFeedback("Connexion réussie");
        reset(defaultValues);
        setShowModal(true);
      } else {
        setFeedback(response.message);
        setShowModal(true);
      }
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  }
  function handleCloseModal() {
    setShowModal(false);
    if (feedback === "Connexion réussie") {
      setConnectedUser(user);
      navigate("/");
    }
  }
  return (
    <>
      <h1>Connexion</h1>
      <hr className={`${styles.separation}`} />
      <form onSubmit={handleSubmit(submit)} className={`${styles.loginForm}`}>
        <p>Formulaire de connexion</p>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="email" className="mb-10">
            Email
          </label>
          <input {...register("email")} type="email" id="email" />
          {errors.email && <p className="text-error">{errors.email.message}</p>}
        </div>
        <div className="d-flex flex-column mb-30">
          <label htmlFor="password" className="mb-10">
            Mot de passe
          </label>
          <input {...register("password")} type="password" id="password" />
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <div className={`${styles.divFin}`}>
          <button className={`btn btn-secondary ${styles.btnConnexion}`}>
            Connexion
          </button>
          <NavLink to="/forgotPassword" className={`${styles.clickable}`}>
            Mot de passe oublié ?
          </NavLink>
        </div>
        <hr />
        <div className={`${styles.bottom_text}`}>
          <p className={`${styles.singUp_text}`}>
            Vous n'avez pas encore de compte ?
          </p>
          <NavLink to="/register" className={`${styles.clickable}`}>
            Inscrivez-vous ici
          </NavLink>
        </div>
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
