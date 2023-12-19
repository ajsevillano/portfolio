import React from 'react';
import { FcHighPriority } from 'react-icons/fc';
import styles from './ErrorContent.module.scss';

interface Props {
  errorStatus: string | boolean;
}

export default function SubmitErrorContent({ errorStatus }: Props) {
  return (
    <>
      <FcHighPriority size={70} />
      <h2 className={styles.errorMessage}>
        Oops, It looks like something went wrong in my end. Please try again
        later.
      </h2>
      <p className={styles.errorMessageSubtitle}>
        <span className={styles.redText}>{errorStatus}.</span>
      </p>
      <p className={styles.errorMessageSubtitle}>
        Unable to send the form due to a problem on the backend.
      </p>
    </>
  );
}
