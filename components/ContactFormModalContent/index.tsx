// Libs
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// Styles
import styles from './ContactFormModalContent.module.scss';
// Components
import SubmitErrorContent from './SubmitErrorContent';
import SubmitSuccessContent from './SubmitSuccessContent';
import ContactFormContent from './MainContent';

export default function ContactFormModalContent({
  closeDialog,
}: {
  closeDialog: () => void;
}) {
  const [sent, setSent] = useState(false);
  const [errorStatus, setErrorStatus] = useState<boolean | string>(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // However the dialog gets closed (X, Escape, button, timer), go back to the form.
  useEffect(() => {
    const dialog = rootRef.current?.closest('dialog');
    const reset = () => {
      setSent(false);
      setErrorStatus(false);
    };
    dialog?.addEventListener('close', reset);
    return () => dialog?.removeEventListener('close', reset);
  }, []);

  // Auto-close the success/error screen; cancelled if the dialog closes first.
  useEffect(() => {
    if (!sent && !errorStatus) return undefined;
    const timer = setTimeout(closeDialog, 4000);
    return () => clearTimeout(timer);
  }, [sent, errorStatus, closeDialog]);

  return (
    <div className={styles.content} ref={rootRef}>
      <div className={styles.image}>
        <Image
          src="/me.png"
          alt="Picture of me"
          width={650}
          height={500}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles.textContainer}>
        {/* If nodemailer return an error, show the error screen component. */}
        {errorStatus && <SubmitErrorContent errorStatus={errorStatus} />}
        {/* If nodemailer return a success, show the success screen component. */}
        {sent && !errorStatus && (
          <SubmitSuccessContent closeDialog={closeDialog} />
        )}
        {/* Kept mounted (just hidden) so a failed send keeps what the user typed. */}
        <div
          style={{ display: sent || errorStatus ? 'none' : 'contents' }}
        >
          <ContactFormContent
            setSent={setSent}
            setErrorStatus={setErrorStatus}
          />
        </div>
      </div>
    </div>
  );
}
