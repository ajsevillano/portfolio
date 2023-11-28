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
  tags?: any;
}

export interface ProcessedGithubArrayTypes extends OriginalGithubArrayTypes {
  demoURL: string | null;
  projectThumbnail: string | null;
  tags: any;
}

export interface Techno {
  id: number;
  name: string;
  color: string;
  backgroundColor: string;
}

export interface CardDataProps {
  name: string;
  description: string;
  gitHubURL: string;
  demoURL: string | null;
  projectThumbnail: string | null;
  tags: any;
}

export interface FilteredProjects {
  id: number;
  name: string;
}

export interface ReposArrayProps {
  projectsData: ProcessedGithubArrayTypes[];
}
