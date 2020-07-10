import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({ costing, options }) => (
  <h2 className={styles.component}>
    Total:<strong> {calculateTotal(formatPrice(costing), options)}</strong>
  </h2>
);

OrderSummary.propTypes = {
  costing: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;