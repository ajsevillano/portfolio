interface ObjectTypes {
  id: number;
  url: string;
  img: string;
}

export const filterRepositories = (data: any[]) => {
  // Define with projects will be filtered on the portfolio
  const filteredProjects = [
    'eme-website-mockup',
    'storybook-base',
    'reddit-clone-next-amplify',
    'amplify-template',
    'aws-amplify-next-12',
    'quiz-app',
    'ajsevillano',
    'rest-api-node-express-jwt',
    'portfolio',
    'firebase-authentication',
  ];
  return data.filter(
    (project: { name: string | string[] }) =>
      // eslint-disable-next-line @typescript-eslint/comma-dangle, implicit-arrow-linebreak
      !filteredProjects.some((filter) => project.name.includes(filter)),
  );
};

export const replaceImgWithError = (e: {
  target: { onerror: null; src: string };
}) => {
  e.target.onerror = null;
  e.target.src = '/portfolio-default.png';
};

export const filtercustomFields = (
  repoDataId: number,
  demoWebUrl: ObjectTypes[],
) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  demoWebUrl?.filter((data) => data.id === repoDataId);
