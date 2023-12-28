import React, { forwardRef, useEffect } from 'react';
import ContactFormModalContent from '@components/ContactFormModalContent';

import styles from './Modal.module.scss';

interface Props {
  closeDialog: () => void;
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ closeDialog }, ref) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDialog();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeDialog]);

  return (
    <dialog ref={ref} className={styles.modal}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={closeDialog}
      >
        X
      </button>
      <ContactFormModalContent closeDialog={closeDialog} />
    </dialog>
  );
});

export default Modal;
