export interface IPost {
  id: number;
  title: string;
  intro: string;
  content: Array<PostContent>;
  published: string;
}

interface PostContent {
  title: string;
  content: string;
}
