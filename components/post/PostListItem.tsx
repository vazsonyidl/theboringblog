import React from 'react';
import { useRouter } from 'next/router';
import { IPost } from 'interfaces/post.interface';
import styles from './PostListItem.module.scss';

export default function Post({ post }: { post: IPost }) {
  const router = useRouter();
  const onPostClick = () => {
    router.push(`/posts/${post.id}`);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') router.push(`/posts/${post.id}`);
  };

  return (
    <section
      className={styles.itemContainer}
      onClick={onPostClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="rowgroup"
    >
      <h3 role="row" className={styles.title}>
        <span role="cell">{post.title}</span>
      </h3>
      <p role="row" className={styles.intro}>
        <span role="cell">{post.intro}</span>
      </p>
    </section>
  );
}
