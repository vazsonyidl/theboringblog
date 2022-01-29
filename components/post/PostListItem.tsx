import Link from 'next/link';
import { IPost } from 'interfaces/post.interface';
import styles from './PostListItem.module.scss';
import { useRouter } from 'next/router';

export default function Post({ post }: { post: IPost }) {
  const router = useRouter();
  const onPostClick = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <section className={styles.itemContainer} onClick={onPostClick}>
      <h3 className={styles.title}>{post.title}</h3>
      <section className={styles.intro}>{post.intro}</section>
    </section>
  );
}
