import Wrapper from '../Layouts/Wrapper';
import styles from './Footer.module.scss';
import { FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper background="#292929" justifycontent="space-around">
      <div className={styles.worktogether}>Contact me</div>
      <div className={styles.socialIcons}>
        <div className="contactEmail">
          <FaEnvelope size="2rem" />
          <p>contact@ajsevillano.com</p>
        </div>
        <div className="Github">
          <FaGithub size="2rem" />
          <p>My github</p>
        </div>
        <div className="twitter">
          <FaTwitter size="2rem" />
          <p>On twitter</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
