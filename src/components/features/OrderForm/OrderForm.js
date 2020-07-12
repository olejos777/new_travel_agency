import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = props => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={props.options[option.id]} setOrderOption={props.setOrderOption} />
        </Col>
      ))};
      <Col xs={12}>
        <OrderSummary costing={props.tripCosting} options={props.options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCosting: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;