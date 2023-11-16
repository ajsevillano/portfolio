import React from 'react';
// Styles
import styles from './Portfolio.module.scss';
// Utils
import { replaceImgWithError, filtercustomFields } from './Portfolio.utils';
// Components
import Card from './Card';
// Data
import customFields from '../../data';

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

function Portfolio({ repoData, custom = customFields }: Props) {
  return (
    <>
      <div className={styles.WrapperTitle}>
        <h2>Recent work</h2>
      </div>
      <div className={styles.wrapper}>
        {repoData?.map((data: DataProps) => (
          <Card
            customFields={filtercustomFields(data.id, custom)}
            key={data.id}
            name={data.name}
            description={data.description}
            handleImgError={replaceImgWithError}
            url={data.html_url}
          />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
