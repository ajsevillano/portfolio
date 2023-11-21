export interface OriginalGithubArrayTypes {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export interface CustomDataArrayTypes {
  id: number;
  URLDemo?: string | null;
  imgDemo?: string | null;
}

export interface ProcessedGithubArrayTypes extends OriginalGithubArrayTypes {
  demoURL: string | null;
  projectThumbnail: string | null;
}
