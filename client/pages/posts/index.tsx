import React from 'react';

import PostList from 'components/post/post-list/PostList';
import { getAllPosts } from 'lib/api';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import { navigationElements } from 'constants/navigation.const';

export default function PostsPage({ posts }: any) {
  return (
    <>
      <Header navigationElements={navigationElements} />
      <main>
        <PostList posts={posts} />
      </main>
      <Footer />
    </>
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
