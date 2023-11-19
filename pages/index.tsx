import React from 'react';
// components
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Footer from '../components/Footer';
import CopyRight from '../components/CopyRight';
import Wave from '../components/Wave';

// Data
import customFields from '../data';
import FILTERED_PROJECTS from '../config';

interface Props {
  projectsData: [];
}

interface ObjectTypes {
  id: number;
  URLDemo?: string | null;
  imgDemo?: string | null;
}

interface ArrayCustomTypes {
  id: number;
  URLDemo: string;
  imgDemo: string;
}

interface GithubArrayWithCustomFieldsTypes {
  id: number;
  name: string;
  description: string;
  html_url: string;
  demoURL: string;
  projectThumbnail: string;
}

function enhanceGithubObject(
  githubObj: ObjectTypes,
  arrayCustom: ArrayCustomTypes[],
) {
  const customObj = arrayCustom.find(
    (custom: ArrayCustomTypes) => custom.id === githubObj.id,
  );

  return {
    ...githubObj,
    demoURL: customObj?.URLDemo || null,
    projectThumbnail: customObj?.imgDemo || null,
  };
}

function filteredGithubArray(
  githubArrayWithCustomFields: GithubArrayWithCustomFieldsTypes[],
) {
  const final = githubArrayWithCustomFields.filter(
    (githubObj: GithubArrayWithCustomFieldsTypes) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      !FILTERED_PROJECTS.some(
        (filteredProject) => filteredProject.id === githubObj.id,
      ),
  );
  return final;
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.github.com/users/ajsevillano/repos?sort=created&direction=desc',
  );
  const Data = await res.json();

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
