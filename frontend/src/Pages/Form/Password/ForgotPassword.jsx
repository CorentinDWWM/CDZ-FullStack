import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPassword } from "../../../apis/users";
import styles from "./ForgotPassword.module.scss";
import Modal from "../../../components/Modal/Modal";

export default function ForgotPassword() {
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);

  const yupSchema = yup.object({
    email: yup
      .string()
      .required("Le champ est obligatoire")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Votre email n'est pas valide"
      ),
  });

  const defaultValues = {
    email: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(yupSchema),
  });

  async function submit(values) {
    console.log(values);
    try {
      const response = await forgotPassword(values.email);
      console.log(response);
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
      <h1>Mot de passe oublié</h1>
      <hr className={`${styles.separation}`} />
      <div className="d-flex flex-column center">
        <form onSubmit={handleSubmit(submit)} className={`${styles.loginForm}`}>
          <p>Mot de passe oublié ?</p>
          <div className="d-flex flex-column mb-20">
            <label htmlFor="email" className="mb-10">
              Email
            </label>
            <input {...register("email")} type="text" id="email" />
            {errors?.email && (
              <p className="feedbackText">{errors.email.message}</p>
            )}
          </div>
          <button className={`btn btn-secondary ${styles.btnConnexion}`}>
            Envoyer
          </button>
          <hr />
        </form>
      </div>
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
