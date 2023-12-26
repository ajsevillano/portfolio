import React from 'react';
import ContactForm from '@components/ContactForm';
import styles from './MainContent.module.scss';

interface Props {
  setSent: (arg0: boolean) => void;
  closeDialog: () => void;
  setErrorStatus: (arg0: boolean) => void;
}

export default function ContactFormContent({
  setSent,
  closeDialog,
  setErrorStatus,
}: Props) {
  return (
    <>
      <h1 className={styles.modalContentTitle}>
        🧔🏻 I&apos;d Love to Hear From You!
      </h1>
      <p className={styles.subtitle}>
        Please fill out the form below and I&apos;ll get back to you as soon as
        possible.
      </p>
      <ContactForm
        setSent={setSent}
        closeDialog={closeDialog}
        setErrorStatus={setErrorStatus}
      />
    </>
  );
}
