import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

import { Row, Col, Grid } from 'react-flexbox-grid';

class OrderForm extends React.Component {
  static propTypes = {
    options: PropTypes.object,
    tripCost: PropTypes.string,
  }

  render() {
    const { options, tripCost } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default OrderForm;