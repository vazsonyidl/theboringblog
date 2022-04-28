import PostPreview from '../post-preview/PostPreview';
import styles from './PostList.module.scss';

export default function PostsList({
  posts,
}: {
  posts: Array<{meta: any; slug: string | number}>;
}) {
  return (
    <>
      <section role="table" className={styles.postContainer}>
        {posts.map((post) => (
          <PostPreview key={post.slug} meta={post.meta} slug={post.slug}/>
        ))}
      </section>
    </>
  );
}
