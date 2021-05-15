import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src="./profile.jpg" alt="Me" />
          <p className={styles.p}>ANTONIO SEVILLANO</p>
        </div>

        <h1 className={styles.h1}>Frontend web developer</h1>
        <h2 className={styles.h2}>
          A selft-taught Web Developer, always learning something new. In love
          with ⚛️
          <span className={styles.span}>React.js</span>
        </h2>
      </div>
      <div>Nada por ahora</div>
    </>
  );
};

export default Header;
