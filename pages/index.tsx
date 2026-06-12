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
    {
      headers: process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {},
    },
  );

  if (!res.ok) {
    // eslint-disable-next-line no-console
    console.error(`GitHub API error: ${res.status}`);
    return { props: { projectsData: [] }, revalidate: 3600 };
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    // eslint-disable-next-line no-console
    console.error('GitHub API did not return an array');
    return { props: { projectsData: [] }, revalidate: 3600 };
  }

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
    revalidate: 3600,
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
