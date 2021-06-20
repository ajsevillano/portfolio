import styles from './Card.module.scss';
import Button from '../../Button';

const Card = ({ name, description, handleImgError, url, customFields }) => {
  const [demoUrl, projectImg] = customFields[0];

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <div className={styles.hoverContainer}>
          <div className={styles.hoverContent}>
            <a href={demoUrl} target="_blank">
              <Button variant="secundary">
                <img src="/link.svg" alt="An SVG of an eye" /> See demo
              </Button>
            </a>

            <a href={url} target="_blank">
              <Button variant="secundary">
                <img src="/github.svg" alt="An SVG of an eye" /> See code
              </Button>
            </a>
          </div>
        </div>
        <img
          className={styles.img}
          src={`/${name}2.png`}
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
