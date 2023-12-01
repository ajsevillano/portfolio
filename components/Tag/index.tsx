import React from 'react';
import validateProps from './tag.validate';
import { tagClasses } from '../../config';
import styles from './Tag.module.scss';

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  const validation = validateProps(tag);

  if (!validation.isValid) {
    return (
      <p className={`${styles.tag} ${styles.error}`}>
        {validation.errorMessage}
      </p>
    );
  }

  const className = tagClasses[tag];
  return <p className={`${styles.tag} ${styles[className]}`}>{tag}</p>;
}
