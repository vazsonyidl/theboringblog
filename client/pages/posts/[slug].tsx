import PostDetail from 'components/post/post-detail/PostDetail';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import { navigationElements } from 'constants/navigation.const';
import { getAllPosts, getPostDataBySlug } from 'lib/api';
import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';

export default function PostDetailPage({ meta, code }: any) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <Header navigationElements={navigationElements} />
      <main>
        <PostDetail meta={meta} code={code}>
          <Component />
        </PostDetail>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostDataBySlug(params?.slug);
  return {
    props: {
      ...postData,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((path) => {
      return {
        params: {
          slug: path.slug,
        },
      };
    }),
    fallback: false,
  };
}
