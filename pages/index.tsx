import React from 'react';
// components
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';
import Wave from '../components/Wave';
// Utils
import { filterRepositories } from '../components/Portfolio/Portfolio.utils';

interface Props {
  repoData: [];
}

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Authorization', process.env.GITHUB_API_KEY as string);

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=20',
    {
      headers: requestHeaders,
    },
  );
  const Data = await res.json();
  const repoDataFinal = filterRepositories(Data);

  return {
    props: {
      repoData: repoDataFinal,
    },
  };
};

export default function Home({ repoData }: Props) {
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
