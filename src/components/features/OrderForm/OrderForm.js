import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings.js';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const sendOrder = (options, tripCosting, tripName, tripId) => {
  console.log(payload);
  const totalCost = formatPrice(calculateTotal(tripCosting, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
  };
  console.log(payload);

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    }).then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ options, tripCosting, setOrderOption, tripName, tripId }) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))};
      <Col xs={12}>
        <OrderSummary costing={tripCosting} options={options} />
      </Col>
    </Row>
    <Button onClick={() => sendOrder(options, tripCosting, tripName, tripId)}>Order now!</Button>
  </Grid>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCosting: PropTypes.string,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.number,
};

export default OrderForm;