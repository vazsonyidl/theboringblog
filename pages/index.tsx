import Head from 'next/head';
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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
