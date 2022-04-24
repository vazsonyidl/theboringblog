import styles from './HomePageComponent.module.css';
import Deck from '../deck/Deck';

const dividendFacts = [
  <blockquote key={1}>
    <em>
      Do you know the only thing that gives me pleasure? It&apos;s to see my
      dividends coming in.
    </em>
    <p className={styles.small}>John D. Rockefeller</p>
  </blockquote>,
  <blockquote key={2}>
    <em>
     The true investor... will do better if he forgets about the stock market
      and pays attention to his dividend returns and to the operation results of
      his companies.
    </em>
    <p className={styles.small}>Benjamin Graham</p>
  </blockquote>,
  <blockquote key={3}>
    <em>
      Only buy something that you&apos;d be perfectly happy to hold if the market
      shut down for 10 years.
    </em>
    <p className={styles.small}>Warren Buffett</p>
  </blockquote>,
  <blockquote key={4}>
    <em>
      We don’t have to be smarter than the rest. We have to be more disciplined
      than the rest.
    </em>
    <p className={styles.small}>Warren Buffett</p>
  </blockquote>,
  <blockquote key={5}>
    <em>
      In the short run, the market is a voting machine, but in the long run it
      is a weighing machine.
    </em>
    <p className={styles.small}>Benjamin Graham</p>
  </blockquote>,
];

export default function HomePageComponent() {
  return (
    <section className={styles.homeContainer}>
      <section>
        <h1 className={styles.introText}>
          <span className={styles.textGradient}>Financial independence.</span>
          <p className={styles.type}>Made easy.</p>
        </h1>
        <p className={styles.intoDescription}>
          If you are interested about how to gain control over your financials,
          and be financially independent from day-to-day work, then join this
          community!
        </p>
        <a
          className={styles.gradientButton}
          type="button"
          role="button"
          href="https://discord.gg/t4EspcHHdN"
        >
          Join Discord
        </a>
      </section>
      <section className={styles.cardContainer}>
        <Deck cards={dividendFacts} />
      </section>
    </section>
  );
}
