import Wrapper from '../Layouts/Wrapper';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Wrapper background="#292929" justifycontent="space-around">
      {/* <h1 className={styles.title}>Hola</h1> */}
      <div className="worktogether">dribb</div>
      <div className="social">instagram</div>
    </Wrapper>
  );
};

export default Footer;
