import Step from './step/Step';
import styles from './RightSection.module.scss';

const RightSection = () => (
  <div className={styles.container}>
    <Step
      img="./img/invite.svg"
      step="Step 1"
      title="INVITE FRIENDS"
      text="Refer friends with your unique referral link."
    />

    <Step
      img="./img/collect-coins.svg"
      step="Step 2"
      title="COLLECT COINS"
      text="Get 1 coin for each friend that installs our extension using your referral link."
    />

    <Step
      img="./img/voucher.svg"
      step="Step 3"
      title="GET VOUCHER"
      text="Redeem for a $20 hotel booking voucher once you collect 20 coins."
    />
  </div>
);

export default RightSection;
