import styles from './Header.module.scss';
import Button from '../Button';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

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
          learning something new. I like to help business to bring ideas to
          life. In love with ⚛️
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
    </>
  );
};

export default Header;
