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
  ProcessedGithubArrayTypes,
  ReposArrayProps,
} from 'types/home';
// Utils
import orchestrateGithubArrayProcessing from '../utils/home.utils';
// Data
import customFields, { manualProjects } from '../data';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc',
    {
      headers: process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {},
    },
  );

  // Throw instead of rendering an empty portfolio: a failed build keeps the
  // previous deployment, and a failed ISR revalidation keeps the last good page.
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const data = await res.json();

  if (!Array.isArray(data)) {
    throw new Error('GitHub API did not return an array');
  }

  const originalGithubArray: OriginalGithubArrayTypes[] = data;
  const customDataArray: CustomDataArrayTypes[] = customFields;

  const processedGithubProjects = orchestrateGithubArrayProcessing(
    originalGithubArray,
    customDataArray,
  );

  const projectsData: ProcessedGithubArrayTypes[] = [
    ...manualProjects,
    ...processedGithubProjects,
  ];

  return {
    props: {
      projectsData,
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
