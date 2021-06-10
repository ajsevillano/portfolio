//components
import Header from '../components/header/Index';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import { filterRepositories } from '../components/Portfolio/Portfolio.utils';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=11'
  );
  const Data = await res.json();
  const repoData = filterRepositories(Data);
  return {
    props: {
      repoData,
    },
  };
};

export default function Home({ repoData }) {
  return (
    <>
      <Header />
      <Portfolio repoData={repoData} />
      <Contact />
    </>
  );
}
