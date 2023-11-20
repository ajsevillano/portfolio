import React from 'react';
// Styles
import styles from './Portfolio.module.scss';
// Components
import Card from './Card';
// Types
import { GithubArrayWithCustomFieldsTypes as DataProps } from '../../types/home';

interface Props {
  reposArray: DataProps[] | [];
}

function Portfolio({ reposArray }: Props) {
  return (
    <>
      <div className={styles.WrapperTitle}>
        <h2>Recent work</h2>
      </div>
      <div className={styles.wrapper}>
        {reposArray?.map(
          ({ id, name, description, html_url, demoURL, projectThumbnail }) => (
            <Card
              key={id}
              name={name}
              description={description}
              gitHubUrl={html_url}
              demoUrl={demoURL}
              projectThumbnail={projectThumbnail}
            />
          ),
        )}
      </div>
    </>
  );
}

export default Portfolio;
