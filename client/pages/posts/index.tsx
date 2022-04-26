import React from 'react';

import PostList from 'components/post/post-list/PostList';
import { getAllPosts } from 'lib/api';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

export default function PostsPage({ posts }: any) {
  return (
    <>
      <Header />
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
