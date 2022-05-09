import React from 'react';

import PostList from 'components/post/post-list/PostList';
import withLayout from 'components/withLayout/withLayout';
import { getAllPosts } from 'lib/api';

function PostsPage({ posts }: any) {
  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default withLayout(PostsPage);
