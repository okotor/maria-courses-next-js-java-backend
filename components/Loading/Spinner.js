import styles from './Spinner.module.css';

export default function Spinner({ size = '2rem' }) {
  return (
    <div
      className={styles.spinner}
      style={{ width: size, height: size }}
    />
  );
}