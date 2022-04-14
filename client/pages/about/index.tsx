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
            long term dividend investment. There are great passive income books
            written in the 80s and around the beginning of the new millenial.
            These usually emphasise the passive income and long term
            investments’ success, but how can people get there? Take tips and
            trick from the community so maybe, after your own research you can
            start to build your own compounding machine!
          </p>
          <h3>Who is this community for?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            There is really no limitation about the experience level. I believe
            that sharing knowledge about passive income generation is beneficial
            both for beginners and for experienced investors as well. With more
            people putting together their ideas, more people can build passive
            income streams.
          </p>
          <h3>How?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            You may wonder how to achieve long term earnings from a few blog
            posts. I would like to build a community, from which everyone can
            benefits how to build passive income streams.
          </p>
          <h3>What do I expect?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            I really hope that more and more people will be aware that relying
            on the pension system is not a good idea. I can say that with a not
            so huge amount of saved and invested money on a monthly bases people
            can dramatically help their future self’s financial status -
            enjoying the benefits of passive income streams.
          </p>
          <h3>What this blog is not about?</h3>
          <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
            I may share some information about the latest trends, as I am trying
            to have up-to-date knowledge. Cryptocurrencies, NFTs, smart
            contracts are just a few buzz-word going around in the last few
            year. But this blog’s main goal is the traditional, long term
            dividend investment.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
