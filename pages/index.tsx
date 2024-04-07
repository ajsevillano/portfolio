import React from 'react';
// components
import Header from '@components/Header';
import Portfolio from '@components/Portfolio';
import About from '@components/About';
import Footer from '@components/Footer';
import CopyRight from '@components/CopyRight';
import Wave from '@components/Wave';
// Types
import {
  CustomDataArrayTypes,
  OriginalGithubArrayTypes,
  ReposArrayProps,
} from 'types/home';
// Utils
import orchestrateGithubArrayProcessing from '../utils/home.utils';
// Data
import customFields from '../data';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc',
  );
  const data = await res.json();

  const originalGithubArray: OriginalGithubArrayTypes[] = data;
  const customDataArray: CustomDataArrayTypes[] = customFields;

  const processedGithubProjects = orchestrateGithubArrayProcessing(
    originalGithubArray,
    customDataArray,
  );

  return {
    props: {
      projectsData: processedGithubProjects,
    },
  };
};

export default function Home({ projectsData }: ReposArrayProps) {
  return (
    <>
      <Header />
      <Portfolio projectsData={projectsData} />
      <section id="about">
        <Wave />
        <About />
      </section>
      <Footer />
      <CopyRight />
    </>
  );
}
