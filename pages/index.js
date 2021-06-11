//components
import Header from '../components/header/Index';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import { filterRepositories } from '../components/Portfolio/Portfolio.utils';
import { demoUrl } from '../data';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=11'
  );
  const Data = await res.json();
  const repoDataFinal = filterRepositories(Data);

  return {
    props: {
      repoData: repoDataFinal,
      demodata: demoUrl,
    },
  };
};

export default function Home({ repoData, demodata }) {
  return (
    <>
      <Header />
      <Portfolio repoData={repoData} demodata={demodata} />
      <Contact />
    </>
  );
}
