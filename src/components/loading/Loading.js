import React from 'react';
import spinner from '../../assets/spinner.jpeg';
import styles from './Loading.css';

export default function Loading() {
  return <img className={styles.Loading} src={spinner} />;
}
