import Wrapper from '../Layouts/Wrapper';
import styles from './Footer.module.scss';
import { FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
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
          <p className={styles.emailLaptop}>contacto@ajsevillano.com</p>
          <p className={styles.emailMobile}>contact</p>
        </div>
        <div className={styles.github}>
          <FaGithub size="2rem" />
          <p className={styles.githubText}>My github</p>
        </div>
        <div className={styles.twitter}>
          <FaTwitter size="2rem" />
          <p className={styles.twitterText}>On twitter</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
