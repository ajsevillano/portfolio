import styles from './Section.module.scss';

const Section = ({ children }) => {
  return <div className={styles.Wrapper}>{children}</div>;
};

export default Section;
