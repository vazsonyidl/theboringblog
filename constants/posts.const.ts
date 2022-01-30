import { IPost } from 'interfaces/post.interface';

export const posts: Array<IPost> = [
  {
    title: 'Why you should start to read this blog?',
    intro:
      'Hi there! My name is Daniel, and the main goal for this blog is to share all my experience gathered so far.',
    content: [
      {
        title: 'This will be fantastic!',
        content:
          'Because I wil share good tips, ideas and my experience with you. Keep reading!',
      },
      {
        title: 'Another cool header!',
        content:
          `This is designed to be a long run, and building a compounding machine was never
          an easy task! This is designed to be a long run, and building a compounding machine was never
          an easy task! This is designed to be a long run, and building a compounding machine was never
          an easy task! This is designed to be a long run, and building a compounding machine was never
          an easy task! This is designed to be a long run, and building a compounding machine was never
          an easy task! This is designed to be a long run, and building a compounding machine was never
          an easy task! This is designed to be a long run, and building a compounding machine was never
          an easy task! This is designed to be a long run, and building a compounding machine was never
          an easy task! This is designed to be a long run, and building a compounding machine was never
          an easy task! `,
      },
    ],
    id: 1,
    published: '01.01.2022',
  },
  {
    title: 'Post two',
    content: [],
    intro: 'Second post intro struff',
    id: 2,
    published: '02.01.2022',
  },
  {
    title: 'Post three',
    content: [],
    intro: 'Third post intro struff',
    id: 3,
    published: '03.01.2022',
  },
  {
    title: 'Post 4',
    content: [],
    intro: 'Fourth post intro struff',
    id: 4,
    published: '04.01.2022',
  },
];
