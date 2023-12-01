import React from 'react';
import { tagClasses } from '../../config';
import styles from './Tag.module.scss';

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  const errorMessages: {
    [key: string]: string;
  } = {
    Error_wrong_format:
      'Error: Array of tags must only contain strings, but it contains at least one number. Check the data file to fix this error.',
    Error_not_array:
      'Error: Tags must be an array. Check the data file to fix this error.',
    Error_empty_array:
      'Error: Tags must not be an empty array. Check the data file to fix this error.',
  };

  if (errorMessages[tag]) {
    return (
      <p className={`${styles.tag} ${styles.error}`}>{errorMessages[tag]}</p>
    );
  }

  const className = tagClasses[tag] || 'tag-default';
  return <p className={`${styles.tag} ${styles[className]}`}>{tag}</p>;
}
