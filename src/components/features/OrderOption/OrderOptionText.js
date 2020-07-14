import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionText = () => (
  <div className={styles.number}>
    <input type="text" className={styles.input}></input>
  </div>
);

export default OrderOptionText;