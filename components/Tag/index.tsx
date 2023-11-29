import React from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  const className = `tag-${tag.replace(/\.|\s/g, '_')}`;
  return <p className={`${styles.tag} ${styles[className]}`}>{tag}</p>;
}
