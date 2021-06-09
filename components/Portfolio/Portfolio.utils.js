export const filterRepositories = (data) => {
  //Define with projects will be filtered on the portfolio
  const filteredProjects = ['ajsevillano', 'danicampos.es'];
  return data.filter(
    (project) =>
      !filteredProjects.some((filter) => project.name.includes(filter))
  );
};

export const replaceImgWithError = (e) => {
  e.target.onerror = null;
  e.target.src = '/portfolio-default.png';
};

export const filterDemoUrl = (repoDataId, demoWebUrl) => {
  const demoUrlData = demoWebUrl?.filter((data) => data.id === repoDataId);
  return demoUrlData?.map((data) => data.url);
};
