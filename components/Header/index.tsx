import React, { useContext } from 'react';
import Head from 'next/head';
import Modal from '@components/Modal';
import { ModalContext } from 'contexts/ModalContext';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Header.module.scss';
import Button from '../Button';

function Header() {
  const { openDialog, closeDialog, modalRef } = useContext(ModalContext);

  return (
    <>
      <Head>
        <title>Antonio Sevillano - Software developer</title>
        <meta
          name="description"
          content="Antonio Sevillano - Fullstack developer"
        />
        <meta
          name="google-site-verification"
          content="bc-C1EEIl4rOH0VMnH1Fj7p61l9sMLPXEuD0Q3bHsv0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Modal closeDialog={closeDialog} ref={modalRef} />
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img className={styles.image} src="./profile.png" alt="Me" />
            <p className={styles.presentation}>
              Hello there! I&apos;m Antonio Sevillano
            </p>
          </div>

          <h1 className={styles.h1}>Software Engineer</h1>
          <h2 className={styles.h2}>
            School of code alumnus & self-taught 🧔🏻 Software Engineer,
            passionate about what I do, and always learning something new.
          </h2>
          <div className={styles.buttonsContainer}>
            <div className={styles.link}>
              <Button
                variant="primary"
                text="Let's talk!"
                onclick={openDialog}
              />
            </div>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/ajsevillano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                icon={<FaLinkedin size={30} />}
                text="Linkedin"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
