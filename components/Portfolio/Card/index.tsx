import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import Button from '../../Button';

function Card({ name, description, handleImgError, url, customFields }: any) {
  const [{ url: demoUrl }] = customFields;
  const [{ img: projectImage }] = customFields;

  const checkDemoUrlExist = !demoUrl ? null : (
    <Button variant="secundary">
      <div>
        <img src="/link.svg" alt="Demo Link" /> See demo
      </div>
    </Button>
  );

  console.log(handleImgError);

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <div className={styles.hoverContainer}>
          <div className={styles.hoverContent}>
            <a
              href={!demoUrl ? null : demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {checkDemoUrlExist}
            </a>

            <a href={url} target="_blank" rel="noreferrer">
              <Button variant="secundary">
                <div>
                  <img src="/github.svg" alt="Github" /> See code
                </div>
              </Button>
            </a>
          </div>
        </div>
        <Image
          src={projectImage}
          alt={name}
          className={styles.img}
          width={358}
          height={224}
          layout="responsive"
        />
      </div>

      <h3 className={styles.projectName}>{name}</h3>
      <span className={styles.project_description}>{description}</span>
    </div>
  );
}

export default Card;