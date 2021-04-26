import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const ApiUrl = 'https://api.github.com/users/ajsevillano/repos';
  const [data, setData] = useState([]);
  const mapTheData = data.map((proyects) => (
    <p key={proyects.id}>{proyects.name}</p>
  ));
  useEffect(() => {
    setTimeout(async function fetchData() {
      const proyects = await axios.get(ApiUrl);
      setData(proyects.data);
      return proyects;
    }, 150);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.h1}>Hi, I'm Antonio</h1>
        <h2>Front-end web developer</h2>
      </div>
      <div>{mapTheData}</div>
    </>
  );
};

export default Header;
