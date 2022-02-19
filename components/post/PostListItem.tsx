import React from 'react';
import { useRouter } from 'next/router';
import { IPost } from 'interfaces/post.interface';
import styles from './PostListItem.module.scss';

export default function Post({ meta, slug }: any) {
  const router = useRouter();
  const onPostClick = () => {
    router.push(`/posts/${slug}`);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') router.push(`/posts/${slug}`);
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
        <span role="cell">{meta.title}</span>
      </h3>
      <p role="row" className={styles.intro}>
        <span role="cell">{meta.intro}</span>
      </p>
    </section>
  );
}
