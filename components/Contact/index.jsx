import styles from './Contact.module.scss';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Image src="/me.png" alt="Picture of me" width={600} height={450} />
      </div>
      <div className={styles.textWrapper}>
        <h1>Something about me</h1>
        <p>Please feel free to ask how I can help your business</p>
        <input type="text" />
        <button>Contact </button>
      </div>
    </div>
  );
};

export default Contact;
