import { parse, format } from 'date-fns';
import styles from './PostDetail.module.scss';

export default function PostDetail({ meta, children }: any) {
  const displayDateInUserLocale = (date: string) =>
    format(parse(date, 'dd.MM.yyyy', new Date()), 'PP');

  return (
    <section className={styles.detailContainer}>
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>{meta?.title}</h1>
        <p className={styles.intro}>
          <em>{meta?.intro}</em>
        </p>
        <p className={styles.readTime}>
          <em>~{meta?.time}</em>
        </p>
      </section>
      <section>{children}</section>
      <i className={styles.publishDate}>
        <small>{displayDateInUserLocale(meta?.published)}</small>
      </i>
    </section>
  );
}
