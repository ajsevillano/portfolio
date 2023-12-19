import React, { forwardRef } from 'react';
import ContactFormModalContent from '@components/ContactFormModalContent';

import styles from './Modal.module.scss';

interface Props {
  closeDialog: () => void;
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ closeDialog }, ref) => (
  <dialog ref={ref} className={styles.modal}>
    <button type="button" className={styles.closeButton} onClick={closeDialog}>
      X
    </button>
    <ContactFormModalContent closeDialog={closeDialog} />
  </dialog>
));

export default Modal;
