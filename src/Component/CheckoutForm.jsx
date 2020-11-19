import React, { Component } from 'react';
import { Container, Col, Row } from "reactstrap";
import ContactInfo from './Checkout_components/ContactInfo.jsx';
import ShippingMethod from './Checkout_components/ShippingMethod.jsx';
import Payment from './Checkout_components/Payment.jsx';
import Billing from './Checkout_components/Billing.jsx';

import CartDetails from './Checkout_components/CartDetails.jsx';


class CheckoutForm extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            data : ""
		};
    
    }

    formChild1(params) {
        this.setState({
          data : params
        })
      }


    render() {
		return (
            <Container>
                <Row>
                    <Col className="left-col-container" md="6">
                        <ContactInfo />
                        <ShippingMethod callback={this.formChild1.bind(this)} />
                        <Payment />
                        <Billing />
                    </Col>
                    <Col className="right-col-container pb-4" md="6">
                        <CartDetails data={this.state.data} />
                    </Col>
                </Row>
            </Container>
		);
	}
}

export default CheckoutForm;
