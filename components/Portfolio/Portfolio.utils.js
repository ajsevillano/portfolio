export const replaceImgWithError = (e) => {
  e.target.onerror = null;
  e.target.src = '/portfolio-default.png';
};

export const filterRepositories = (data) => {
  //Define with projects will be filtered on the portfolio
  const filteredProjects = ['ajsevillano', 'danicampos.es'];

  const final = data.filter(
    (project) =>
      !filteredProjects.some((filter) => project.name.includes(filter))
  );
  return final;
};
