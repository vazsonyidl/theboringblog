import styles from './HomePageComponent.module.css';

import Money from 'public/logos/money.svg';


export default function HomePageComponent() {
  return (
    <section className={styles.homeContainer}>
      <section >
        <h1 className={styles.introText}>
          <span className={styles.textGradient}>Financial independence </span>
           made easy.</h1>
        <p className={styles.intoDescription}>
          If you are interested about how to gain control over your financials,
          and be financially independent from day-to-day work, then join this community!
        </p>
        <a className={styles.gradientButton} type='button' role='button' href='https://discord.gg/t4EspcHHdN'>Join Discord</a>
      </section>
      <section className={styles.moneyContainer}>
        <Money className={styles.money}/>
      </section>
    </section>
  );
}
