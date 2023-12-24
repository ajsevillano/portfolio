// Libs
import React, { useState } from 'react';
import Image from 'next/image';
// Styles
import styles from './ContactFormModalContent.module.scss';
// Components
import SubmitErrorContent from './SubmitErrorContent';
import SubmitSuccessContent from './SubmitSuccessContent';
import ContactFormContent from './MainContent';

export default function ContactFormModalContent({ closeDialog }: any) {
  const [sent, setSent] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <Image src="/me.png" alt="Picture of me" width={650} height={500} />
      </div>
      <div className={styles.textContainer}>
        {/* If nodemailer return an error, show the error screen component. */}
        {errorStatus && <SubmitErrorContent errorStatus={errorStatus} />}
        {/* If nodemailer return a success, show the success screen component. */}
        {sent && !errorStatus && (
          <SubmitSuccessContent closeDialog={closeDialog} />
        )}
        {/* Default form screen. */}
        {!sent && !errorStatus && (
          <ContactFormContent
            setSent={setSent}
            setErrorStatus={setErrorStatus}
            closeDialog={closeDialog}
          />
        )}
      </div>
    </div>
  );
}
