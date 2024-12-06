// Libraries
import React from 'react';
import Image from 'next/image';
// Components
import { FaGithub, FaLink } from 'react-icons/fa';
import Button from '../../Button';
import Tag from '../../Tag';
// Types
import { CardDataProps } from './Card.interface';

// Styles
import styles from './Card.module.scss';

function Card({
  name,
  description,
  gitHubURL,
  demoURL,
  projectThumbnail,
  tags,
}: CardDataProps) {
  const checkDemoUrlExist = !demoURL ? null : (
    <Button variant="secondary" text="See demo" icon={<FaLink size={20} />} />
  );

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <div className={styles.hoverContainer}>
          <div className={styles.hoverContent}>
            <a
              data-testid="demo-link"
              href={demoURL || ''}
              target="_blank"
              rel="noreferrer"
            >
              {checkDemoUrlExist}
            </a>

            <a
              href={gitHubURL}
              target="_blank"
              rel="noreferrer"
              data-testid="code-link"
            >
              <Button
                variant="secondary"
                text="See code"
                icon={<FaGithub size={25} />}
              />
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
          priority
        />
      </div>

      <h3 className={styles.projectName}>{name}</h3>
      <div className={styles.tagsContainer}>
        {tags?.map((tag: string) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <span className={styles.project_description}>
        {!description ? 'No description provided yet' : description}
      </span>
    </div>
  );
}

export default Card;
