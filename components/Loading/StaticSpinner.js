'use client';
import { useLoading } from '@/context/LoadingContext';
import Spinner from './Spinner';
import styles from './Spinner.module.css';

export default function LocalSpinner() {
  const { isLoading } = useLoading();
  if (!isLoading) return null;

  return (
    <div className={styles.overlay}>
      <Spinner size="4rem" />
    </div>
  );
}