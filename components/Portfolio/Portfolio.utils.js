export const filterRepositories = (data) => {
  //Define with projects will be filtered on the portfolio
  const filteredProjects = [
    'aws-amplify-next-12',
    'quiz-app',
    'ajsevillano',
    'rest-api-node-express-jwt',
    'portfolio',
    'firebase-authentication',
  ];
  return data.filter(
    (project) =>
      !filteredProjects.some((filter) => project.name.includes(filter))
  );
};

export const replaceImgWithError = (e) => {
  e.target.onerror = null;
  e.target.src = '/portfolio-default.png';
};

export const filtercustomFields = (repoDataId, demoWebUrl) => {
  return demoWebUrl?.filter((data) => data.id === repoDataId);
};
