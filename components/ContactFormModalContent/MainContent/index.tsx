import React from 'react';
import ContactForm from '@components/ContactForm';
import styles from './MainContent.module.scss';
import { MainContentProps } from './MainContent';

export default function ContactFormContent({
  setSent,
  closeDialog,
  setErrorStatus,
}: MainContentProps) {
  return (
    <>
      <h2 className={styles.modalContentTitle}>
        🧔🏻 I&apos;d Love to Hear From You!
      </h2>
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
