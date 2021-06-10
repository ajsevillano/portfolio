//Styles
import styles from './Portfolio.module.scss';
//Utils
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  replaceImgWithError,
  filterRepositories,
  filterDemoUrl,
} from './Portfolio.utils';

//Components
import Card from './Card';

const Portfolio = ({ repoData }) => {
  // const [repoData, setRepoData] = useState();
  // const [demoWebUrl, setDemoWebUrl] = useState();
  // const gitHubApiUrl =
  //   'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=11';
  // const demosUrls = '/demourl.json';

  // const fetchData = async (apiUrl, setter) => {
  //   try {
  //     const resp = await axios.get(apiUrl);
  //     apiUrl === gitHubApiUrl
  //       ? setter(filterRepositories(resp.data))
  //       : setter(resp.data);
  //   } catch (err) {
  //     // Error Handler
  //     console.error(err);
  //   }
  // };

  // //Fetch Github repositories
  // useEffect(() => {
  //   fetchData(gitHubApiUrl, setRepoData);
  // }, []);

  // //Fetch demos urls data
  // useEffect(() => {
  //   fetchData(demosUrls, setDemoWebUrl);
  // }, []);

  return (
    <>
      <div className={styles.sectionTitle}>
        <h2>Recent work</h2>
      </div>
      <div className={styles.wrapper}>
        {repoData?.map((data) => (
          <Card
            // demoUrl={filterDemoUrl(data.id, demoWebUrl)}
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
