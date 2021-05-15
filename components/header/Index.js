import styles from './Header.module.scss';
import Button from '../Button';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src="./profile.png" alt="Me" />
          <p className={styles.presentation}>Hi! I'm Antonio Sevillano</p>
        </div>

        <h1 className={styles.h1}>Frontend web developer</h1>
        <h2 className={styles.h2}>
          A self-taught Web Developer, passionate about what I do, always
          learning something new. In love with ⚛️
          <span className={styles.span}>React.js</span>
        </h2>
        <Button variant="primary" />
      </div>
      <div>Nada por ahora</div>
    </>
  );
};

export default Header;
