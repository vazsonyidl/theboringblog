import Head from 'next/head';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import PostList from 'components/post/PostList';
import { IPost } from 'interfaces/post.interface';
import { navigationElements } from 'constants/navigation.const';
import { posts } from 'constants/posts.const';

export default function Home({posts}: {posts: Array<IPost>}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header navigationElements={navigationElements} />
      <main>
        <PostList posts={posts} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  }
}
