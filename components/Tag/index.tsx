import React from 'react';
import { tagClasses } from '../../config';
import styles from './Tag.module.scss';

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  const className = tagClasses[tag];

  // Flags a typo in data.ts; TypeScript already guarantees tags is a string[].
  if (!className) {
    return (
      <p className={`${styles.tag} ${styles.error}`}>
        {`Error: Unknown tag "${tag}".`}
      </p>
    );
  }

  return <p className={`${styles.tag} ${styles[className]}`}>{tag}</p>;
}
