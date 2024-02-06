import { TailSpin } from 'react-loader-spinner';
import styles from './styles.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <TailSpin color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;