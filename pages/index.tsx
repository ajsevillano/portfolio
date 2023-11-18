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
// Data
import customFields from '../data';
import FILTERED_PROJECTS from '../config';

interface Props {
  repoData: [];
  filteredGithubArrayWithCustomFields: [];
}

interface ObjectTypes {
  id: number;
  URLDemo?: string | null;
  imgDemo?: string | null;
}

function enhanceGithubObject(githubObj: ObjectTypes, arrayCustom: any) {
  const customObj = arrayCustom.find(
    (custom: any) => custom.id === githubObj.id,
  );

  return {
    ...githubObj,
    URLDemo: customObj?.url || null,
    imgDemo: customObj?.img || null,
  };
}

function filteredGithubArray(githubArrayWithCustomFields: any) {
  const final = githubArrayWithCustomFields.filter(
    (githubObj: any) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      !FILTERED_PROJECTS.some(
        (filteredProject) => filteredProject.id === githubObj.id,
      ),
  );
  return final;
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc&per_page=21',
  );
  const Data = await res.json();
  const repoDataFinal = filterRepositories(Data);

  const arrayGithub = Data;
  const arrayCustom = customFields;

  const githubArrayWithCustomFields = arrayGithub.map(
    (githubObj: ObjectTypes) => enhanceGithubObject(githubObj, arrayCustom),
  );

  const filteredGithubArrayWithCustomFields = filteredGithubArray(
    githubArrayWithCustomFields,
  );

  return {
    props: {
      repoData: repoDataFinal,
      filteredGithubArrayWithCustomFields,
    },
  };
};

export default function Home({
  repoData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filteredGithubArrayWithCustomFields,
}: Props) {
  return (
    <>
      <Header />
      <Portfolio repoData={repoData} custom={customFields} />
      <Wave />
      <About />
      <Footer />
      <CopyRight />
    </>
  );
}
