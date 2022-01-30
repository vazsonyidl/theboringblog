import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { navigationElements } from 'constants/navigation.const';

import styles from './AboutPage.module.scss';

export default function AboutPage() {
  return (
    <>
      <Header navigationElements={navigationElements} />
      <main>
        <section role="textbox" className={styles.contentContainer}>
          <h3>Why and who?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            I create and edit this page to share useful information and my
            experience in creating a passive income machine during the long term
            run. I am quite young, starting this early in my life, started this
            a year ago.
          </p>
          <h3>Who this blog is for?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            You may have read several books in the topic and several articles,
            but you may have wondered about how is it actually looks like in the
            real world. Implementing this may not be straightforward, but let me
            help you guide through this process.
          </p>
          <h3>How and how much?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            I do not promise as high returns as jumping on the Bitcoin or NFT
            wave at a right time, but I am sure that building a passive income
            with a compounding machine is still a thing!
          </p>
          <h3>One important note</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            All the information you can find here is dedicated for long term
            (more than 10 years, ideally aroung 20 years){' '}
            <strong>investment</strong>.
          </p>
          <h3>Bottom line</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            You can reach me out anytime at Twitter
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
