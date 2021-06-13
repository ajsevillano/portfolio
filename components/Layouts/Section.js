import styles from './Section.module.scss';

const Section = ({ children, background }) => {
  return (
    <div
      className={styles.Wrapper}
      style={{
        backgroundColor: background,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
