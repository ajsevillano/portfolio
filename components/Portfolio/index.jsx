import styles from './Portfolio.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { replaceImgWithError, filterRepositories } from './Portfolio.utils';

//Components
import Card from './Card';

const Portfolio = () => {
  const [repoData, setRepoData] = useState();

  const demoUrl = [
    { id: 362217174, url: 'http://www.ajsevillano.com' },
    { id: 361238021, url: 'http://www.ajsevillano.com' },
    { id: 357897050, url: 'http://www.ajsevillano.com' },
    { id: 354868893, url: 'http://www.ajsevillano.com' },
    { id: 351733523, url: 'http://www.ajsevillano.com' },
    { id: 337684354, url: 'http://www.ajsevillano.com' },
    { id: 334662367, url: 'http://www.ajsevillano.com' },
    { id: 322001903, url: 'http://www.ajsevillano.com' },
    { id: 302134704, url: 'http://www.ajsevillano.com' },
  ];

  const filterDemoUrl = (repoDataId) => {
    const demoUrlData = demoUrl.filter((data) => data.id === repoDataId);
    return demoUrlData.map((data) => data.url);
  };

  useEffect(async () => {
    try {
      const resp = await axios.get(
        `https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=11`
      );
      setRepoData(filterRepositories(resp.data));
    } catch (err) {
      // Error Handler
      console.error(err);
    }
  }, []);

  return (
    <>
      <div className={styles.sectionTitle}>
        <h2>Recent work</h2>
      </div>
      <div className={styles.wrapper}>
        {repoData?.map((data) => (
          <Card
            demoUrl={filterDemoUrl(data.id)}
            key={data.id}
            name={data.name}
            description={data.description}
            handleImgError={replaceImgWithError}
            url={data.html_url}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
