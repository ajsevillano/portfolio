// Libs
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Components
import CoffeeAnimation from '@components/CoffeeAnimation';
// Styles
import styles from './About.module.scss';

function About() {
  return (
    <div className={styles.aboutSectionBlock}>
      <div className={styles.container}>
        <div className={styles.imgMe}>
          <Image
            src="/me.png"
            alt="Picture of me"
            width={600}
            height={450}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <CoffeeAnimation />
        </div>
        <div className={styles.introText}>
          <h2 className={styles.header}>The guy behind the beard</h2>
          <div className={styles.text}>
            My name is Antonio, although most people know me as Sevi. I&apos;m a
  Spanish software engineer who has called the UK home for the past 10
  years, with over 20 years working in IT behind me. During the pandemic
  I made the switch to what had always been my favourite part of the
  job — building software — and I haven&apos;t looked back since. These
    past years I&apos;ve worked in insurtech at Percayso Inform, built and
  maintained production systems for long-term clients (a product
  catalogue platform and its API among them), and built side projects
  of my own, like a <Link href="https://jupiter-moons.netlify.app/" legacyBehavior><a className={styles.link} target="_blank" rel="noopener noreferrer">Jupiter moon tracker</a></Link>{' '}for fellow amateur
  astronomers. I&apos;m now looking for the next chapter. Away from the
  keyboard, you&apos;ll find me behind a telescope chasing Jupiter, and
  being the proud dad of a very curious little{' '}
            <div className={styles.emoji}>
              👧🏻
              <div className={styles.tooltip}>
                <p className={styles.word}> why?</p>
                <p className={styles.word}> why?</p>

                <p className={styles.word}> WHY?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
