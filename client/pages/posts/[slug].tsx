import PostDetail from 'components/post/post-detail/PostDetail';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import { navigationElements } from 'constants/navigation.const';
import { getAllPosts, getPostBySlug } from 'lib/api';
import { markdownToHtml } from 'lib/markdownToHtml';

export default function PostDetailPage({ post }: any) {
  return (
    <>
      <Header navigationElements={navigationElements} />
      <main>
        {post ? (
          <PostDetail htmlContent={post?.htmlContent} meta={post?.meta} />
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const { meta, content } = getPostBySlug(params?.slug);

  const htmlContent = await markdownToHtml(content || '');
  return {
    props: {
      post: {
        htmlContent,
        meta: meta,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
