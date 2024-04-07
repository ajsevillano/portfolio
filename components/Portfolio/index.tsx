import React from 'react';
// Styles
import styles from './Portfolio.module.scss';
// Components
import Card from './Card';
// Types
import { ReposArrayProps } from '../../types/home';

function Portfolio({ projectsData }: ReposArrayProps) {
  return (
    <section id="portfolio">
      <div className={styles.WrapperTitle}>
        <h2>Explore My Portfolio</h2>
      </div>
      <div className={styles.wrapper}>
        {projectsData?.map(
          ({
            id,
            name,
            description,
            html_url: gitHubURL,
            demoURL,
            projectThumbnail,
            tags,
          }) => (
            <Card
              key={id}
              name={name}
              description={description}
              gitHubURL={gitHubURL}
              demoURL={demoURL}
              projectThumbnail={projectThumbnail}
              tags={tags}
            />
          ),
        )}
      </div>
    </section>
  );
}

export default Portfolio;
