//Define with projects will be filtered on the portfolio
const filteredProjects = ['ajsevillano', 'danicampos.es'];

export const filterRepositories = (data) => {
  return data.filter(
    (project) =>
      !filteredProjects.some((filter) => project.name.includes(filter))
  );
};

export const replaceImgWithError = (e) => {
  e.target.onerror = null;
  e.target.src = '/portfolio-default.png';
};

//Always show 9 projects on the portfolio
export const numberOfFilters = 9 + filteredProjects.length;
