import { IPost } from 'interfaces/post.interface';
import { parse, format } from 'date-fns';
import styles from './PostDetail.module.scss';

export default function PostDetail({ postDetail }: { postDetail: IPost }) {
  const displayDateInUserLocale = (date: string) =>
    format(parse(date, 'dd.MM.yyyy', new Date()), 'PP');

  return (
    <section className={styles.detailContainer}>
      <h1 className={styles.title}>{postDetail.title}</h1>
      <p>
        <i>{postDetail.intro}</i>
      </p>
      <article className={styles.contentContainer}>
        {postDetail.content.map((postContent, index) => (
          <span key={index}>
            <h4 className={styles.subTitle}>{postContent.title}</h4>
            <p className={styles.subContent}>{postContent.content}</p>
          </span>
        ))}
      </article>

      <i className={styles.publishDate}>
        <small>{displayDateInUserLocale(postDetail.published)}</small>
      </i>
    </section>
  );
}
