import styles from './Button.module.scss';
import cx from 'classnames';

const Button = ({ variant }) => {
  return (
    <button className={cx(styles.Button, styles[variant])}>Contact me</button>
  );
};

export default Button;
