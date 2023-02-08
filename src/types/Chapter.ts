export interface IChapter {
  title: string;
  concernedClasses: string[];
  tags: string[];
  content?: string;
  contentFileName: string;
  filename: string;
  path?: string;
}
