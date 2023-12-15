import React, { forwardRef } from 'react';
import styles from './Modal.module.scss';

interface Props {
  closeDialog: () => void;
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ closeDialog }, ref) => (
  <dialog ref={ref} className={styles.modal}>
    <div className={styles.content}>
      <div className={styles.image} />
      <div className={styles.textContainer}>
        <h1>Contact me!</h1>
        <p>Please contact me for any enquire</p>
        <button type="button" onClick={closeDialog}>
          Close
        </button>
      </div>
    </div>
  </dialog>
));

export default Modal;
