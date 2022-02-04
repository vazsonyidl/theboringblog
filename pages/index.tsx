import { parse } from 'date-fns';

import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import PostList from 'components/post/PostList';
import { IPost } from 'interfaces/post.interface';
import { navigationElements } from 'constants/navigation.const';
import { posts } from 'constants/posts.const';

export default function Home({ posts }: { posts: Array<IPost> }) {
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
  const _posts = posts.sort(
    (a, b) =>
      parse(b.published, 'dd.MM.yyyy', new Date()).getTime() -
      parse(a.published, 'dd.MM.yyyy', new Date()).getTime()
  );

  return {
    props: {
      posts: _posts,
    },
  };
}
