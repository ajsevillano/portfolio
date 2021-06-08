import styles from './Card.module.scss';

const Card = ({ name, description, handleImgError }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <div className={styles.hoverContainer}>
          <div className={styles.hoverContent}>
            <a href="http://www.google.es">Hola</a>
          </div>
        </div>
        <img
          className={styles.img}
          src={`/${name}.png`}
          alt={name}
          onError={handleImgError}
        />
      </div>

      <h3 className={styles.projectName}>{name}</h3>
      <span className={styles.project_description}>{description}</span>
    </div>
  );
};

export default Card;
