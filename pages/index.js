//components
import Header from '../components/header/Index';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';
import Wave from '../components/Separators/Wave';
//Utils
import { filterRepositories } from '../components/Portfolio/Portfolio.utils';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=11'
  );
  const Data = await res.json();
  const repoDataFinal = filterRepositories(Data);

  return {
    props: {
      repoData: repoDataFinal,
    },
  };
};

export default function Home({ repoData }) {
  return (
    <>
      <Header />
      <Portfolio repoData={repoData} />
      <Wave />
      <About />
      <Footer />
      <CopyRight />
    </>
  );
}
