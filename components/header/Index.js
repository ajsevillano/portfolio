import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Hi, I'm Antonio</h1>
      <h2>Front-end web developer</h2>
    </div>
  );
};

export default Header;
