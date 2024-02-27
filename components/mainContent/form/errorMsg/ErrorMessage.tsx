import styles from './ErrorMessage.module.scss';

type ErrorMessageProps = {
  children: string;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => <div className={styles.errorMessage}>{children}</div>;

export default ErrorMessage;
