import FILTERED_PROJECTS from '../config';
import {
  CustomDataArrayTypes,
  OriginalGithubArrayTypes,
  ProcessedGithubArrayTypes,
} from '../types/home';

function removeHyphen(githubObj: ProcessedGithubArrayTypes) {
  const name = githubObj.name.replace(/-/g, ' ');
  return {
    ...githubObj,
    name,
  };
}

function capitalizeName(githubObj: ProcessedGithubArrayTypes) {
  const name = githubObj.name.charAt(0).toUpperCase() + githubObj.name.slice(1);
  return {
    ...githubObj,
    name,
  };
}
function filteredGithubArray(
  githubArrayWithCustomFields: ProcessedGithubArrayTypes[],
) {
  const result = githubArrayWithCustomFields.filter(
    (githubObj: ProcessedGithubArrayTypes) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      !FILTERED_PROJECTS.some(
        (filteredProject) => filteredProject.id === githubObj.id,
      ),
  );

  return result;
}

function enhanceGithubObject(
  originalGithubArray: OriginalGithubArrayTypes[],
  customDataArray: CustomDataArrayTypes[],
) {
  return originalGithubArray.map((githubObj) => {
    const matchingCustomData = customDataArray.find(
      (customData) => customData.id === githubObj.id,
    );

    return {
      ...githubObj,
      demoURL: matchingCustomData?.URLDemo || null,
      projectThumbnail: matchingCustomData?.imgDemo || null,
    };
  });
}

export default function orchestrateGithubArrayProcessing(
  originalGithubArray: OriginalGithubArrayTypes[],
  customDataArray: CustomDataArrayTypes[],
) {
  const addCustomFields: ProcessedGithubArrayTypes[] = enhanceGithubObject(
    originalGithubArray,
    customDataArray,
  );
  const filteredArray = filteredGithubArray(addCustomFields);
  const finalResult = filteredArray.map(removeHyphen).map(capitalizeName);
  return finalResult;
}
