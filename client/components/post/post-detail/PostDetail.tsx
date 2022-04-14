import { parse, format } from 'date-fns';
import styles from './PostDetail.module.scss';

export default function PostDetail({ htmlContent, meta }: any) {
  const displayDateInUserLocale = (date: string) =>
    format(parse(date, 'dd.MM.yyyy', new Date()), 'PP');

  return (
    <section className={styles.detailContainer}>
      <section>
        <h1 className={styles.title}>{meta.title}</h1>
        <p className={styles.intro}>
          {' '}
          <em>{meta.intro}</em>
        </p>
      </section>
      <section
        className={styles.contentContainer}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></section>

      <i className={styles.publishDate}>
        <small>{displayDateInUserLocale(meta.published)}</small>
      </i>
    </section>
  );
}
