import React from 'react';
import Head from 'next/head';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import styles from './Header.module.scss';
import Button from '../Button';

function Header() {
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
      <section className={styles.header}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img className={styles.image} src="./profile.png" alt="Me" />
            <p className={styles.presentation}>
              Hello there! I&apos;m Antonio Sevillano
            </p>
          </div>

          <h1 className={styles.h1}>Software Engineer</h1>
          <h2 className={styles.h2}>
            School of code student & self-taught 🧔🏻 Software Engineer,
            passionate about what I do, and always learning something new. In
            love with ⚛️
            <span className={styles.span}>React.js</span>
          </h2>
          <div className={styles.buttonContainer}>
            <Button variant="primary">Let&apos;s talk!</Button>
            <Button variant="outline">
              <IoChevronDownCircleOutline size={30} />
              <span>See my work</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
