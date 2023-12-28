import React from 'react';
import { FcOk } from 'react-icons/fc';
import Button from '@components/Button';
import styles from './SubmitSuccessContent.module.scss';

export default function SubmitSuccessContent({
  closeDialog,
}: {
  closeDialog: () => void;
}) {
  return (
    <>
      <FcOk size={70} />
      <h2 className={styles.successMessage}>
        Thank you for your message! I&apos;ll get back to you as soon as
        possible.
      </h2>
      <Button onclick={closeDialog} variant="outline" text="Close modal" />
    </>
  );
}
