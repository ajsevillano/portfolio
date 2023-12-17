import React, { forwardRef, useState } from 'react';
import Image from 'next/image';
import { FaPaperPlane } from 'react-icons/fa';
import Button from '@components/Button';
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
              <div className={styles.formContainer}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
                <input
                  className={styles.input}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email@company.com"
                />
                <textarea
                  className={styles.input}
                  style={{ resize: 'none', overflow: 'hidden', height: '70px' }}
                  name="subject"
                  id="subject"
                  placeholder="Your message"
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  text="Send form"
                  onclick={() => setSent(true)}
                  icon={<FaPaperPlane />}
                  disabled
                />
              </div>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
});

export default Modal;
