import React, { forwardRef, useState } from 'react';
import Image from 'next/image';

import ContactForm from '@components/ContactForm';

import styles from './Modal.module.scss';

interface Props {
  closeDialog: () => void;
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ closeDialog }, ref) => {
  const [sent, setSent] = useState(false);

  return (
    <dialog ref={ref} className={styles.modal}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={closeDialog}
      >
        X
      </button>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src="/me.png" alt="Picture of me" width={650} height={500} />
        </div>
        <div className={styles.textContainer}>
          {sent ? (
            <h1>Enviado</h1>
          ) : (
            <>
              <h1 className={styles.modalContentTitle}>
                🧔🏻 I&apos;d Love to Hear From You!
              </h1>
              <p className={styles.subtitle}>
                Please fill out the form below and I&apos;ll get back to you as
                soon as possible.
              </p>
              <ContactForm setSent={setSent} closeDialog={closeDialog} />
            </>
          )}
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
