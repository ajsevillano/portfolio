import styles from './Button.module.scss';
import cx from 'classnames';

const Button = ({ variant, children }) => {
  return (
    <button className={cx(styles.Button, styles[variant])}>{children}</button>
  );
};

export default Button;
