import styles from './Header.module.scss';
import Button from '../Button';
import Head from 'next/head';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <>
      <Head>
        <title>Antonio Sevillano - FullStack web developer</title>
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
              Hello there! I'm Antonio Sevillano
            </p>
          </div>

          <h1 className={styles.h1}>FullStack web developer</h1>
          <h2 className={styles.h2}>
            School of code student & self-taught 🧔🏻 Software Developer,
            passionate about what I do, and always learning something new. I
            like to help business to bring ideas to life. In love with ⚛️
            <span className={styles.span}>React.js</span>
          </h2>
          <div className={styles.buttonContainer}>
            <Button variant="primary">Let's talk!</Button>
            <Button variant="outline">
              <IoChevronDownCircleOutline size={30} />
              <span>See my work</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
