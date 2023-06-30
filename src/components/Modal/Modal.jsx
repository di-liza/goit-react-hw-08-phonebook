import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

// import { TiTimes } from 'react-icons/ti';
import { Backdrop } from './Modal.styled';
import { ContactsForm } from 'components';

const modalRoot = document.getElementById('modal');

function Modal({ closeModal }) {
  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      {/* <div className="modal"> */}
      {/* {children} */}
      <ContactsForm closeModal={closeModal} />

      {/* </div> */}
    </Backdrop>,
    modalRoot
  );
}

export default Modal;
