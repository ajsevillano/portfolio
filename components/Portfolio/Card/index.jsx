import styles from './Card.module.scss';

const Card = ({ name, description, handleImgError }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={`/${name}.png`}
        alt={name}
        onError={handleImgError}
        alt="foo"
      />
      <h3 className={styles.projectName}>{name}</h3>
      <span className={styles.project_description}>{description}</span>
    </div>
  );
};

export default Card;