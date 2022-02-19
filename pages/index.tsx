import { parse } from 'date-fns';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import PostList from 'components/post/PostList';
import { navigationElements } from 'constants/navigation.const';
import { getAllPosts } from 'lib/api';

export default function Home({posts}: any) {
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
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
