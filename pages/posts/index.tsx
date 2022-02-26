import { getAllPosts } from 'lib/api';
import PostList from 'components/post/PostList';
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
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
