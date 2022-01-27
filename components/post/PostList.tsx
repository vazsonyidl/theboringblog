import PostListItem from 'components/post/PostListItem';
import { IPost } from 'interfaces/post.interface';
import styles from './PostList.module.scss';

export default function PostsList({ posts }: { posts: Array<IPost> }) {
  return (
    <section role="table" className={styles.postContainer}>
      {posts.map((post, index) => (
        <PostListItem post={post} key={index} />
      ))}
    </section>
  );
}
