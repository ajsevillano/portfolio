import Wrapper from '../Layouts/Wrapper';
import styles from './Footer.module.scss';
import {
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaLink,
  FaLinkedin,
} from 'react-icons/fa';
import Button from '../Button';

const Footer = () => {
  return (
    <Wrapper background="#292929" justifycontent="space-evenly">
      <div>
        <h1 className={styles.contactMe}>Contact me</h1>
        <p className={styles.subTitle}>
          I'm open to frontend jobs and freelance projects
        </p>
        <div className={styles.buttoncontainer}>
          <Button>Get in touch</Button>
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
            contacto@ajsevillano.com
          </a>
        </div>
        <div className={styles.github}>
          <FaGithub size="2rem" />

          <a
            className={styles.githubText}
            href="http://www.github.com/ajsevillano"
            target="_blank"
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
          >
            On twitter
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
