import styles from './Header.module.scss';
import Button from '../Button';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src="./profile.png" alt="Me" />
          <p className={styles.presentation}>
            Hello there! I'm Antonio Sevillano
          </p>
        </div>

        <h1 className={styles.h1}>Frontend web developer</h1>
        <h2 className={styles.h2}>
          A self-taught 🧔🏻 Web Developer, passionate about what I do, and always
          learning something new. Currently working on different projects with
          ⚛️
          <span className={styles.span}>React.js</span>
        </h2>
        <div className={styles.buttonContainer}>
          <Button variant="primary" text="Contact me" />
          <Button variant="outline" text="See my work" />
        </div>
      </div>
      <div>Nada por ahora</div>
    </>
  );
};

export default Header;
