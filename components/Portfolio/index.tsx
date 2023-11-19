import React from 'react';
// Styles
import styles from './Portfolio.module.scss';
// Utils

// Components
import Card from './Card';

interface Props {
  newArray: DataProps[] | [];
}

interface DataProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  URLDemo: string;
  imgDemo: string;
}

function Portfolio({ newArray }: Props) {
  return (
    <>
      <div className={styles.WrapperTitle}>
        <h2>Recent work</h2>
      </div>
      <div className={styles.wrapper}>
        {newArray?.map(
          ({ id, name, description, html_url, URLDemo, imgDemo }) => (
            <Card
              key={id}
              name={name}
              description={description}
              url={html_url}
              demoUrl={URLDemo}
              imgDemo={imgDemo}
            />
          ),
        )}
      </div>
    </>
  );
}

export default Portfolio;
