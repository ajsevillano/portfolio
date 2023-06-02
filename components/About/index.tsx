import Image from 'next/image';
import React from 'react';
import styles from './About.module.scss';

function About() {
  return (
    <section className={styles.sectionBlock}>
      <div className={styles.container}>
        <div className={styles.imgMe}>
          <Image src="/me.png" alt="Picture of me" width={600} height={450} />
        </div>
        <div className={styles.introText}>
          <h1 className={styles.header}>The guy behind the beard</h1>
          <p className={styles.text}>
            My name is Antonio (Most people known me as Sevi), I&apos;m a
            self-taught spanish web developer living in the UK for the last 8
            years. Despite having some IT background, I recently embraced and
            felt in love with frontend developing and since then, I haven&apos;t
            stopped learning and working in diferent projects to polish my
            skills (specially with React.js ⚛️). I&apos;m the proud dad of a 3
            year old 👧🏻 girl called Mireia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
