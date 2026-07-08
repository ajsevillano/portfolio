export interface OriginalGithubArrayTypes {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export interface CustomDataArrayTypes {
  id: number;
  demoURL?: string | null;
  projectThumbnail?: string | null;
  tags: string[];
}

export interface BaseProjectData extends OriginalGithubArrayTypes {
  demoURL: string | null;
  projectThumbnail: string | null;
  tags: string[];
}

export type ProcessedGithubArrayTypes = BaseProjectData;
export type ManualProjectTypes = BaseProjectData;

export interface FilteredProjects {
  id: number;
  name: string;
}

export interface ReposArrayProps {
  projectsData: ProcessedGithubArrayTypes[];
}

