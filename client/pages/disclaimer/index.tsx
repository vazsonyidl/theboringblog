import withLayout from 'components/withLayout/withLayout';
import styles from './DisclaimerPage.module.scss';

function DisclaimerPage() {
  return (
    <main>
      <section role="textbox" className={styles.contentContainer}>
        <h3>Disclaimer</h3>
        <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
          <em>longterminco.me</em> is not a registered investment, legal advisor
          or broker. Any investment opinions, analysis or tip expressed by this
          page is just for informational purposes and intended as an educational
          material. All of the information on the page is from personal research
          and experience of the owner of the website.
        </p>
        <h3>Do your own research</h3>
        <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
          The content of this webpage is intended to be used as informational
          purposes only. It is important to do your own analysis before making
          any investment on behalf of yourself.
        </p>
        <h3>Risk</h3>
        <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
          Past performance is not a guarantee of future return, nor is it
          necessarily indicative of future performance. Keep in mind investing
          involves risk.
        </p>
        <h3>Fluctuation</h3>
        <p className={`${styles.limitWidth} ${styles.infoParagraph}`}>
          The value of your investment will fluctuate over time and you may gain
          or lose money. You can lose all of your invested money. Always invest
          guided by your best knowledge.
        </p>
      </section>
    </main>
  );
}

export default withLayout(DisclaimerPage);
