import styles from './Wrapper.module.scss';

const Wrapper = ({ children, background }) => {
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

export default Wrapper;
