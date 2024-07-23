import styles from "./Modal.module.scss";

import React from "react";

export default function Modal({
  onClose,
  feedback,
  children,
  handleCloseModal,
}) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles.divbtn}`}>
          <button
            className="btn btn-reverse-primary"
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
        {feedback && <p>{feedback}</p>}
        {children}
      </div>
    </div>
  );
}
