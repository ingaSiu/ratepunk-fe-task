import LeftSection from './leftSection/LeftSection';
import RightSection from './rightSection/RightSection';
import styles from './MainContent.module.scss';

const MainContent = () => {
  return (
    <div className={styles.mainWrapper}>
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default MainContent;
