import styles from './Card.module.scss';
import Button from '../../Button';

const Card = ({ name, description, handleImgError, url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <div className={styles.hoverContainer}>
          <div className={styles.hoverContent}>
            <a href={url}>
              <Button variant="secundary">
                <img src="/link.svg" alt="An SVG of an eye" /> See demo
              </Button>
            </a>
            <Button variant="secundary">
              <img src="/github.svg" alt="An SVG of an eye" /> See code
            </Button>
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
