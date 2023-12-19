import React, { forwardRef, useState } from 'react';
import Image from 'next/image';
import { FcHighPriority, FcOk } from 'react-icons/fc';
import ContactForm from '@components/ContactForm';
import Button from '@components/Button';
import styles from './Modal.module.scss';

interface Props {
  closeDialog: () => void;
}

const Modal = forwardRef<HTMLDialogElement, Props>(({ closeDialog }, ref) => {
  const [sent, setSent] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

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
          {errorStatus && (
            <>
              <FcHighPriority size={70} />
              <h2 className={styles.errorMessage}>
                Oops, It looks like something went wrong in my end. Please try
                again later.
              </h2>
              <p className={styles.errorMessageSubtitle}>
                <span className={styles.redText}>{errorStatus}.</span>
              </p>
              <p className={styles.errorMessageSubtitle}>
                Unable to send the form due to a problem on the backend.
              </p>
            </>
          )}
          {sent && !errorStatus && (
            <>
              <FcOk size={70} />
              <h2 className={styles.errorMessage}>
                Thank you for your message! I&apos;ll get back to you as soon as
                possible.
              </h2>
              <Button
                onclick={closeDialog}
                variant="outline"
                text="Close modal"
              />
            </>
          )}
          {!sent && !errorStatus && (
            <>
              <h1 className={styles.modalContentTitle}>
                🧔🏻 I&apos;d Love to Hear From You!
              </h1>
              <p className={styles.subtitle}>
                Please fill out the form below and I&apos;ll get back to you as
                soon as possible.
              </p>
              <ContactForm
                setSent={setSent}
                closeDialog={closeDialog}
                setErrorStatus={setErrorStatus}
              />
            </>
          )}
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
