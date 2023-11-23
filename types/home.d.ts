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
}

export interface ProcessedGithubArrayTypes extends OriginalGithubArrayTypes {
  demoURL: string | null;
  projectThumbnail: string | null;
}

export interface CardDataProps {
  name: string;
  description: string;
  gitHubURL: string;
  demoURL: string | null;
  projectThumbnail: string | null;
}

export interface FilteredProjects {
  id: number;
  name: string;
}

export interface ReposArrayProps {
  projectsData: ProcessedGithubArrayTypes[];
}
