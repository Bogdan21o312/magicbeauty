'use client'
import {ModalWindow} from "@magicbeauty/common";
import {useState} from "react";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <ModalWindow isModalWindow={isModalOpen} setModalWindow={setIsModalOpen} hash="popup">
        <h2>Modal Content</h2>
        <p>This is the content of the modal window.</p>
      </ModalWindow>
    </div>
  );
}
