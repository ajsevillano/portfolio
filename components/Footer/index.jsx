import Wrapper from '../Layouts/Wrapper';
import styles from './Footer.module.scss';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper background="#292929" justifycontent="space-around">
      <div className={styles.worktogether}>Contact me</div>
      <div className={styles.socialIcons}>
        <FaGithub size="2rem" />
      </div>
    </Wrapper>
  );
};

export default Footer;
