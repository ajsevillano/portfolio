import styles from './Card.module.scss';
import Button from '../../Button';

const Card = ({ name, description, handleImgError, url, customFields }) => {
  const [{ url: demoUrl }] = customFields;
  const [{ img: projectImage }] = customFields;

  const checkDemoUrlExist = !demoUrl ? null : (
    <Button variant="secundary">
      <img src="/link.svg" alt="Demo Link" /> See demo
    </Button>
  );

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <div className={styles.hoverContainer}>
          <div className={styles.hoverContent}>
            <a href={demoUrl} target="_blank">
              {checkDemoUrlExist}
            </a>

            <a href={url} target="_blank">
              <Button variant="secundary">
                <img src="/github.svg" alt="Github" /> See code
              </Button>
            </a>
          </div>
        </div>
        <img
          className={styles.img}
          src={projectImage}
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
