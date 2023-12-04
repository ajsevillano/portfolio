import React from 'react';
import {
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaRegClipboard,
} from 'react-icons/fa';
import Button from '../Button';
import Wrapper from '../Layouts/Wrapper';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <Wrapper background="#292929" justifycontent="space-evenly">
      <div className={styles.contacMeHeader}>
        <h1 className={styles.contactMe}>Contact me</h1>
        <p className={styles.subTitle}>
          I&apos;m open to frontend jobs and freelance projects
        </p>
        <div className={styles.buttoncontainer}>
          <Button
            variant="secondary"
            text="Get in touch"
            icon={<FaRegClipboard size={25} />}
          />
        </div>
      </div>
      <div className={styles.socialIcons}>
        <div className={styles.email}>
          <FaEnvelope size="2rem" />
          <a
            className={styles.emailMobile}
            href="mailto:correo@ajsevillano.com"
          >
            contact
          </a>
          <a
            className={styles.emailLaptop}
            href="mailto:correo@ajsevillano.com"
          >
            By email
          </a>
        </div>
        <div className={styles.github}>
          <FaGithub size="2rem" />

          <a
            className={styles.githubText}
            href="http://www.github.com/ajsevillano"
            target="_blank"
            rel="noreferrer"
          >
            My github
          </a>
        </div>
        <div className={styles.github}>
          <FaLinkedin size="2rem" />

          <a
            className={styles.githubText}
            href="https://www.linkedin.com/in/ajsevillano/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className={styles.twitter}>
          <FaTwitter size="2rem" />
          <a
            className={styles.twitterText}
            href="http://www.twitter.com/ajsevillano"
            target="_blank"
            rel="noreferrer"
          >
            On twitter
          </a>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
