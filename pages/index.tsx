// Libraries
import React from 'react';
import { filteredGithubArray, enhanceGithubObject } from '../utils/home.utils';
// components
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';
import Wave from '../components/Wave';
// Data
import customFields from '../data';
// Types
import { ObjectTypes } from '../types/home';

interface Props {
  projectsData: [];
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc',
  );
  const Data = await res.json();

  const arrayGithubProjects = Data;
  const arrayCustomFields = customFields;

  // Map the github projects array and add the custom fields
  const githubArrayWithCustomFields = arrayGithubProjects.map(
    (githubObj: ObjectTypes) =>
      enhanceGithubObject(githubObj, arrayCustomFields),
  );

  // After adding the custom fields, filter the projects that I don't want to show
  const filteredGithubArrayWithCustomFields = filteredGithubArray(
    githubArrayWithCustomFields,
  );

  return {
    props: {
      projectsData: filteredGithubArrayWithCustomFields,
    },
  };
};

export default function Home({ projectsData }: Props) {
  return (
    <>
      <Header />
      <Portfolio reposArray={projectsData} />
      <Wave />
      <About />
      <Footer />
      <CopyRight />
    </>
  );
}
