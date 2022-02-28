import PostListItem from './post-list-item/PostListItem';
import styles from './PostList.module.scss';

export default function PostsList({ posts }: {posts: Array<{content: string, meta: any, slug: string}>}) {
  return (
    <>
    <section role="table" className={styles.postContainer}>
      {posts.map((post) => (
        <PostListItem meta={post.meta} slug={post.slug} key={post.slug} />
      ))}
    </section>
    </>
  );
}
