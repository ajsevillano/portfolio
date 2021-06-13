//Styles
import styles from './Portfolio.module.scss';
//Utils
import { replaceImgWithError, filterDemoUrl } from './Portfolio.utils';
//Components
import Card from './Card';

const Portfolio = ({ repoData, demodata }) => {
  return (
    <>
      <div className={styles.WrapperTitle}>
        <h2>Recent work</h2>
      </div>
      <div className={styles.wrapper}>
        {repoData?.map((data) => (
          <Card
            demoUrl={filterDemoUrl(data.id, demodata)}
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
