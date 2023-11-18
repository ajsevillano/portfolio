import React from 'react';
// Styles
import styles from './Portfolio.module.scss';
// Utils
import { replaceImgWithError, filtercustomFields } from './Portfolio.utils';
// Components
import Card from './Card';

interface Props {
  repoData: DataProps[] | [];
  custom: any;
}

interface DataProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

function Portfolio({ repoData, custom }: Props) {
  return (
    <>
      <div className={styles.WrapperTitle}>
        <h2>Recent work</h2>
      </div>
      <div className={styles.wrapper}>
        {repoData?.map(({ id, name, description, html_url }) => (
          <Card
            customFields={filtercustomFields(id, custom)}
            key={id}
            name={name}
            description={description}
            handleImgError={replaceImgWithError}
            url={html_url}
          />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
