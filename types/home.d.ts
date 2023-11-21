export interface ObjectTypes {
  id: number;
  URLDemo?: string | null;
  imgDemo?: string | null;
}

export interface GithubArrayWithCustomFieldsTypes {
  id: number;
  name: string;
  description: string;
  html_url: string;
  demoURL: string | null;
  projectThumbnail: string;
}
