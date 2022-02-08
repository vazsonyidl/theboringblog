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
          <h3>Why?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            I had been looking for useful resources and recent experiences about
            long term dividend investment - for a friendly passive income. I
            found that this topic has the fewest resource with real-life
            experience in the recent years. There are great books written in the
            80s and around the beginning of the new millenial. These usually
            emphasise the passive income and long term investments’ success, but
            how can people get there? Take tips and trick from me as I would
            like to share my journey step by step, so maybe after your own
            research you can start to build your own compounding machine!
          </p>
          <h3>Who is this blog for?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            Hence I am from Europe, I try to give information mostly for
            Europeans, especially for the younger generation, but feel free to
            get all the relevant information that may help you succeed. I plan
            to share platforms used by me that may be not available in the US or
            the rest of the world, but the backbone of the method is still the
            same.
          </p>
          <h3>How?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            You may wonder how to achieve long term earnings from a few blog
            posts. I want to share my experience and detailed steps about how I
            have started this journey and how I pick companies for myself. From
            this, you can draw your own the consequences.
          </p>
          <h3>What do I expect?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            I do not want to predict numbers that will turn out not to be true,
            and the future is unpredictable - almost. Based on historical data,
            and the performance of companies during economical crisis, my
            original plan is to retire at the age of 45. That is ~20 years from
            now! I can say that with small amount of saved and invested money on
            a monthly bases people can dramatically help their future self’s
            financial status.
          </p>
          <h3>What this blog is not about?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            I may share some information about the latest trends, as I am trying
            to have up-to-date knowledge. Cryptocurrencies, NFTs, smart
            contracts are just a few buzz-word going around in the last few
            year. But this blog’s main goal is the traditional, long term
            dividend investment.
          </p>
          <h3>Contact</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            If you have any questions, feel free to reach me out via
            <a href="mailto:help@longterminco.me">e-mail</a>. Or if you like
            more the copy-paste stuff, then here it is:
            <em>help@longterminco.me</em>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
