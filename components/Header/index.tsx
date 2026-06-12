import React, { useContext } from 'react';
import Head from 'next/head';
import { ModalContext } from 'contexts/ModalContext';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Header.module.scss';
import Button from '../Button';

const SITE_URL = 'https://www.ajsevillano.com';
const SITE_TITLE = 'Antonio Sevillano - Software Engineer';
const SITE_DESCRIPTION =
  'Portfolio of Antonio Sevillano, a self-taught software engineer based in the UK building web apps with React, TypeScript, Next.js and Node.js.';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const PROFILE_IMAGE = `${SITE_URL}/me.png`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Antonio Sevillano',
  alternateName: 'Sevi',
  url: SITE_URL,
  image: PROFILE_IMAGE,
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://www.linkedin.com/in/ajsevillano/',
    'https://github.com/ajsevillano',
    'https://bsky.app/profile/ajsevillano.bsky.social',
  ],
};

function Header() {
  const { openDialog } = useContext(ModalContext);

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Antonio Sevillano" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <meta
          name="google-site-verification"
          content="bc-C1EEIl4rOH0VMnH1Fj7p61l9sMLPXEuD0Q3bHsv0"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img className={styles.image} src="./profile.png" alt="Me" />
            <p className={styles.presentation}>
              Hello there! I&apos;m Antonio Sevillano
            </p>
          </div>

          <h1 className={styles.h1}>Software Engineer</h1>
          <h2 className={styles.h2}>
            Software engineer with 4+ years of professional experience in insurtech and e-commerce, building data products, internal tools and customer-facing apps with React, TypeScript and Node. Based in the UK · Open to frontend & fullstack roles.
          </h2>
          <div className={styles.buttonsContainer}>
            <div className={styles.link}>
              <Button
                variant="primary"
                text="Let's talk!"
                onClick={openDialog}
              />
            </div>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/ajsevillano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                icon={<FaLinkedin size={30} />}
                text="Linkedin"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
