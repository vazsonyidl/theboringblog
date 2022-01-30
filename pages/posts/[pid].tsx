import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import PostDetail from 'components/post/PostDetail';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import { IPost } from 'interfaces/post.interface';

import { navigationElements } from 'constants/navigation.const';
import { posts } from 'constants/posts.const';

const defaultPostDetail: IPost = {
  id: 0,
  title: 'Something I am sure went wrong',
  content: [],
  intro: '',
  published: '01.01.1970',
};

export default function PostDetailPage() {
  const router = useRouter();
  const { pid } = router.query;
  const [postDetail, setPostDetail] = useState<IPost | undefined>();

  useEffect(() => {
    const postDetail = getPostById(String(pid));
    setPostDetail(postDetail);
  }, [pid]);

  const getPostById = (postId: string): IPost | undefined => {
    return posts.find((post) => post.id === +postId);
  };
  return (
    <>
      <Header navigationElements={navigationElements} />
      <main>{postDetail ? <PostDetail postDetail={postDetail} /> : null}</main>
      <Footer />
    </>
  );
}
