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

function validateTags(tags: any) {
  if (!Array.isArray(tags)) {
    return ['No tags'];
  }
  if (tags.length === 0) {
    return ['No tags'];
  }
  if (!tags.every((tag) => typeof tag === 'string')) {
    return ['Error'];
  }
  return tags;
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
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { id, name, description, html_url } = githubObj;
    const matchingCustomData = customDataArray.find(
      (customData) => customData.id === githubObj.id,
    );

    return {
      id,
      name,
      description,
      html_url,
      demoURL: matchingCustomData?.demoURL || null,
      projectThumbnail: matchingCustomData?.projectThumbnail || null,
      tags: validateTags(matchingCustomData?.tags),
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
