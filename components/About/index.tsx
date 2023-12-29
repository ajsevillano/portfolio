import Image from 'next/image';
import CoffeAnimation from '@components/CoffeeAnimation';
import React from 'react';
import styles from './About.module.scss';

function About() {
  return (
    <section className={styles.sectionBlock}>
      <div className={styles.container}>
        <div className={styles.imgMe}>
          <Image src="/me.png" alt="Picture of me" width={600} height={450} />
          <CoffeAnimation />
        </div>
        <div className={styles.introText}>
          <h1 className={styles.header}>The guy behind the beard</h1>

          <div className={styles.text}>
            My name is Antonio, although most people know me as Sevi. I&apos;m a
            self-taught spanish software engineer who has been living in the UK
            for the past 10 years. Coming from a IT background I had some
            knwoledge of coding but It was during the pandemic when I decided to
            take my career to the next level and become a software engineer. I
            haven&apos;t stopped learning and working in diferent projects to
            polish my skills since then. Currently, I work as a software
            engineer for{' '}
            <a
              className={styles.link}
              href="https://www.percayso-inform.com/"
              target="_blank"
              rel="noreferrer"
            >
              Percayso Inform
            </a>
            , a data enrichment company in the insurance sector. I&apos;m the
            proud dad of a 3 year old{' '}
            <div className={styles.emoji}>
              👧🏻
              <div className={styles.tooltip}>
                <p className={styles.word}> why?</p>
                <p className={styles.word}> why?</p>

                <p className={styles.word}> WHY?</p>
              </div>
            </div>{' '}
            girl.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
