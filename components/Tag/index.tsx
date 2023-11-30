import React from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  const className = `tag-${tag.replace(/\.|\s/g, '_')}`;
  if (tag === 'Error') {
    return (
      <p className={`${styles.tag} ${styles.error}`}>
        Error: Array of tags must only contain strings, but it contains at least
        one number.Check the data file to fix this error.
      </p>
    );
  }

  return <p className={`${styles.tag} ${styles[className]}`}>{tag}</p>;
}
