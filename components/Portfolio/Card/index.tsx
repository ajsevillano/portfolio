// Libraries
import React from 'react';
import Image from 'next/image';
// Styles
import styles from './Card.module.scss';
// Components
import Button from '../../Button';

interface DataProps {
  name: string;
  description: string;
  gitHubUrl: string;
  demoUrl: string | null;
  projectThumbnail: string | null;
}

function Card({
  name,
  description,
  gitHubUrl,
  demoUrl,
  projectThumbnail,
}: DataProps) {
  const checkDemoUrlExist = !demoUrl ? null : (
    <Button variant="secondary">
      <div className={styles.imgWrapper} data-testid="demo-link">
        <img className={styles.buttonImg} src="/link.svg" alt="Demo Link" />
        <p className={styles.buttonText}>See demo</p>
      </div>
    </Button>
  );

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <div className={styles.hoverContainer}>
          <div className={styles.hoverContent}>
            <a href={demoUrl || ''} target="_blank" rel="noreferrer">
              {checkDemoUrlExist}
            </a>

            <a
              href={gitHubUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="code-link"
            >
              <Button variant="secondary">
                <div className={styles.imgWrapper}>
                  <img
                    className={styles.buttonImg}
                    src="/github.svg"
                    alt="Github"
                  />
                  <p className={styles.buttonText}>See code</p>
                </div>
              </Button>
            </a>
          </div>
        </div>
        <Image
          src={!projectThumbnail ? '/project-progress.png' : projectThumbnail}
          alt={name}
          className={styles.img}
          width={358}
          height={224}
          layout="responsive"
        />
      </div>

      <h3 className={styles.projectName}>{name}</h3>
      <span className={styles.project_description}>
        {!description ? 'No description provided yet' : description}
      </span>
    </div>
  );
}

export default Card;
