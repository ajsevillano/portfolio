import styles from './Button.module.scss';
import cx from 'classnames';

const Button = ({ variant, text }) => {
  return <button className={cx(styles.Button, styles[variant])}>{text}</button>;
};

export default Button;
