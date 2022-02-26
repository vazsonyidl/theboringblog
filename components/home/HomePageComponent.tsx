import styles from './HomePageComponent.module.css';

import Control from 'public/logos/control.svg';
import Nervous from 'public/logos/nervous.svg';
import Island from 'public/logos/island.svg';
import TimeIsMoney from 'public/logos/time-is-money.svg';

export default function HomePageComponent() {
  return (
    <section className={styles.contentContainer}>
      <section className={styles.contentRow}>
        <article className={styles.content}>
          <TimeIsMoney />
          <div className={styles.description}>
            <h1>It gives back your valuable time</h1>
            <p>
              Without the need to monitoring your portfolio, you can save an
              enormous amount of your valuable time
            </p>
          </div>
        </article>
        <article className={styles.gapContainer}></article>
      </section>
      <section className={styles.contentRow}>
        <article className={styles.gapContainer}></article>
        <article className={styles.content}>
          <Nervous />
          <div className={styles.description}>
            <h1>Save yourself from anxiety</h1>
            <p>
              By relying on well-tested methods, you can lay back
              while the market is in panic
            </p>
          </div>
        </article>
      </section>
      <section className={styles.contentRow}>
        <article className={styles.content}>
          <Control />
          <div className={styles.description}>
            <h1>Take control</h1>
            <p>
              Have a stressless investment portfolio that makes a stable compounding machine
            </p>
          </div>
        </article>
        <article className={styles.gapContainer}></article>
      </section>
      <section className={styles.contentRow}>
      <article className={styles.gapContainer}></article>
        <article className={styles.content}>
          <Island />
          <div className={styles.description}>
            <h1>Enjoy </h1>
            <p>
              The finish line and confetti may seems a bit far away at the beginning, but trust me,
              you will enyjoy the journey as well as the final result
            </p>
          </div>
        </article>
      </section>
    </section>
  );
}
