import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassword, signup } from "../../../apis/users";
import * as yup from "yup";
import styles from "./ResetPassword.module.scss";
import Modal from "../../../components/Modal/Modal";

export default function ResetPassword() {
  const { email } = useParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const schema = yup.object({
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "trop court")
      .max(10, "trop long"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf([yup.ref("password"), ""], "Les mots ne correspondent pas"),
  });

  const defaultValues = {
    password: "",
    confirmPassword: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function submit(values) {
    console.log(values);
    try {
      const response = await resetPassword({
        password: values.password,
        email,
      });
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1 className="ta-center">
        Récupérer <br /> de mot de passe
      </h1>
      <hr className={`${styles.separation}`} />
      <form onSubmit={handleSubmit(submit)} className={`${styles.loginForm}`}>
        <div className="d-flex flex-column mb-10">
          <p>Récupérer votre mot de passe</p>
          <label htmlFor="password" className="mb-10">
            Nouveau mot de passe
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="mb-20"
          />
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-10">
          <label htmlFor="confirmPassword" className="mb-10">
            Confirmation de mot de passe
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirmPassword"
            className="mb-20"
          />
          {errors.confirmPassword && (
            <p className="text-error">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button className={`btn btn-secondary ${styles.btnConnexion}`}>
          Changer le mot de passe
        </button>
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
