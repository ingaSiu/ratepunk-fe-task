import Image from 'next/image';
import styles from './Step.module.scss';

type StepProps = {
  step: string;
  title: string;
  text: string;
  img: string;
};

const Step = ({ step, title, text, img }: StepProps) => (
  <div className={styles.container}>
    <Image src={img} alt={title} width={128} height={140} />
    <div className={styles.infoWrapper}>
      <p className={styles.step}>{step}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  </div>
);

export default Step;
