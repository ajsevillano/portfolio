import styles from './Wrapper.module.scss';

const Wrapper = ({ children, background, justifycontent = 'center' }) => {
  return (
    <div
      className={styles.Wrapper}
      style={{
        backgroundColor: background,
        justifyContent: justifycontent,
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
