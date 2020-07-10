import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = (props) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary costing={props.tripCosting} options={props.options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCosting: PropTypes.string,
};

export default OrderForm;