"use client";

import React, { useState } from "react";
import "./styles.scss";
import { useRouter } from 'next/navigation'

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleYesClick = () => {
   router.push('/')
  };

  const handleNoCloseClick = () => {
    closeModal();
  };

  return (
    <div className="modal">
      <button onClick={openModal}>Go Back</button>
      {isModalOpen && (
        <div className="modal__container">
          <div className="modal__content">
            <p>Do you want to proceed?</p>
            <div className="modal__buttons">
              {" "}
              <button className="modal__buttons-yes" onClick={handleYesClick}>Yes</button >
              <button className="modal__buttons-no"  onClick={handleNoCloseClick}>No, Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
