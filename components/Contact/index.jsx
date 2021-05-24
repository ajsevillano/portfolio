import styles from './Contact.module.scss';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <div className={styles.wave}></div>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image src="/me.png" alt="Picture of me" width={600} height={450} />
        </div>
        <div className={styles.textWrapper}>
          <h1>Something about me</h1>
          <p>
            My name is Antonio Sevillano, I'm a self-taught spanish web
            developer living in the UK for the last 8 years. Despite having some
            backend coding knowledge from a long time ago, I recently embrace
            and felt in love with frontend developing and since then, I haven't
            stopped learning and pulishing my skills (specially with React.js
            ⚛️).
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
