import styles from './Contact.module.scss';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <Image src="/me.png" alt="Picture of me" width={600} height={450} />
      </div>
      <h1 className={styles.title}>Please contact with me</h1>
    </div>
  );
};

export default Contact;
