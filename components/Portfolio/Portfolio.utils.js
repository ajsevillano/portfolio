export const replaceImgWithError = (e) => {
  e.target.onerror = null;
  e.target.src = '/portfolio-default.png';
};

export const filterRepositories = (data) => {
  return data.filter(
    (project) =>
      project.name !== 'ajsevillano' && project.name !== 'danicampos.es'
  );
};
