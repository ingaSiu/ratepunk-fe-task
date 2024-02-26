import Form from '../form/Form';
import styles from './LeftSection.module.scss';

const LeftSection = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Refer friends and get rewards</h1>
    <p className={styles.text}>
      Refer your friends to us and earn hotel booking vouchers. We&#39;ll give you 1 coin for each friend that installs
      our extension. Minimum cash-out at 20 coins.
    </p>
    <Form />
    <p className={styles.note}>Limits on max rewards apply.</p>
  </div>
);

export default LeftSection;
