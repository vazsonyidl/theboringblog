import { IPost } from 'interfaces/post.interface';
import { parse, format } from 'date-fns';
import styles from './PostDetail.module.scss';

export default function PostDetail({htmlContent, meta}: any) {
  const displayDateInUserLocale = (date: string) =>
    format(parse(date, 'dd.MM.yyyy', new Date()), 'PP');

  return (
    <section className={styles.detailContainer}>
      <section dangerouslySetInnerHTML={{__html: htmlContent}}></section>

      <i className={styles.publishDate}>
        <small>{displayDateInUserLocale(meta.published)}</small>
      </i>
    </section>
  );
}
