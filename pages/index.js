//components
import Header from '../components/header/Index';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import { filterRepositories } from '../components/Portfolio/Portfolio.utils';
import { customFields } from '../data';
import CopyRight from '../components/CopyRight';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=11'
  );
  const Data = await res.json();
  const repoDataFinal = filterRepositories(Data);

  return {
    props: {
      repoData: repoDataFinal,
      demodata: customFields,
    },
  };
};

export default function Home({ repoData, demodata }) {
  return (
    <>
      <Header />
      <Portfolio repoData={repoData} demodata={demodata} />
      <About />
      <Footer />
      <CopyRight />
    </>
  );
}
