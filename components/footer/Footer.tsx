import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer role="term" className={styles.footer}>
      <section className={styles.description}>
        Always do your own research
      </section>
    </footer>
  );
}
