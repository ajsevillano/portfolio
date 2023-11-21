import FILTERED_PROJECTS from '../config';
import { ObjectTypes, GithubArrayWithCustomFieldsTypes } from '../types/home';

export function filteredGithubArray(
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

export function enhanceGithubObject(
  githubObj: ObjectTypes,
  arrayCustom: ObjectTypes[],
) {
  const customObj = arrayCustom.find(
    (custom: ObjectTypes) => custom.id === githubObj.id,
  );

  return {
    ...githubObj,
    demoURL: customObj?.URLDemo || null,
    projectThumbnail: customObj?.imgDemo || null,
  };
}
