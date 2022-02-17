import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import PostDetail from 'components/post/PostDetail';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import { IPost } from 'interfaces/post.interface';

import { navigationElements } from 'constants/navigation.const';
import { posts } from 'constants/posts.const';
import { getPostBySlug } from 'lib/api';
import { markdownToHtml } from 'lib/markdownToHtml';

export default function PostDetailPage({post}) {
  return (
    <>
      <Header navigationElements={navigationElements} />
      <main>{post ? <PostDetail htmlContent={post?.htmlContent} meta={post?.meta} /> : null}</main>
      <Footer />
    </>
  );
}

export async function getStaticProps({params}: {params: any}) {
  const {data, content} = getPostBySlug(params?.slug);
  
  const htmlContent = await markdownToHtml(content || '');
  console.log(htmlContent);
  return {
    props: {
      post: {
        htmlContent,
        meta: data
      }
    }
  }
}

export async function getStaticPaths(params:type) {
  return {
    paths: [1,2,3].map((el) => {
      return {
        params: {
          slug: el.toString(),
        },
      }
    }),
    fallback: false,
  }
}