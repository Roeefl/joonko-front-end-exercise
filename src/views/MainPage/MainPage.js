import LeadForm from 'components/LeadForm';
import Shapes from 'components/Shapes';
import styles from './MainPage.module.scss';

const descriptionBullets = [
  'How remote work broadens the talent pool',
  'The productivity results behind distributed teams',
  'An increase in diversity as a result of remote recruitment',
  'Money saved on operational costs and salary negotiations',
];

function MainPage() {
  return (
    <div className={styles.container}>
      <section className={styles.shapes}>
        <Shapes />
      </section>
      <main className={styles.content}>
        <h1 className={styles.title}>
          The Future of Work in the now:
          <br />
          Why you should Become Remote-ready
        </h1>
        <h2 className={styles.subTitle}>
          Infographic
        </h2>
        <div className={styles.description}>
          <p className={styles.primary}>
            The results are in, and the verdict? Remote is here to stay.
            <br />
            Thanks to a global pandemic companies have had to reevaluate the power of distributed workforces and we’ve put together all the reasons why going remote is the right move to make.
            <br />
            In this infographics, you’ll see:
          </p>
          <ul className={styles.bullets}>
            {descriptionBullets.map((bullet, index) => (
              <li key={index} className={styles.bullet}>
                {bullet}
              </li>
            ))}
          </ul>
          <p className={styles.suffix}>
            What better time to refresh your strategy than on the brink of a whole new world?
            <br />
            Dig into this list of recruiting methodologies and adjust your sails for the future!
          </p>
        </div>
      </main>
      <aside className={styles.form}>
        <LeadForm />
      </aside>
    </div>
  );
};

export default MainPage;
