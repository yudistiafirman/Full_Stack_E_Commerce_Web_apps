import React, { Component } from "react";
import { Alert, Button, Container, Col, Row, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import Toggle from "../Toggle.jsx";
import ProvinsiOptions from './input_options/provinsiOptions.jsx';
import KotaOptions from './input_options/kotaOptions.jsx';
import DaerahOptions from './input_options/daerahOptions.jsx';
import PlusIcon from '../../assets/images/_ionicons_svg_md-add.png';

export default class Billing extends Component {
    constructor(props){
        super(props)

        this.state = { checked: false };
    }

    handleChange = () => {
        this.setState({
            checked: !this.state.checked
          });
    }

    hideContent = () => {
        this.setState({
            checked: false
          });
    }

  render() {
    const content = this.state.checked 
      ? 
      <Form>
        <Toggle>
				{({ on, off, toggle }) => (
					<div className="toggle-container">
						{on && <div>
							<Alert color="success">Kontak anda telah disimpan.</Alert>
							<div className="button-right">
								<Button onClick={toggle} color="secondary">Edit</Button>
							</div>
						</div>}
						{off && <div>
							<FormGroup>
        <Input
          type="email"
          name="co_bil_email"
          id="coBillContactEmail"
          placeholder="Email (Untuk konfirmasi)"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Input
              type="text"
              name="co_bil_first_name"
              id="coBillFirstName"
              placeholder="First name"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              type="text"
              name="co_bil_last_name"
              id="coBillLastName"
              placeholder="Last name"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          type="text"
          name="co_bil_address"
          id="coBillAddress"
          placeholder="Alamat"
        />
      </FormGroup>
      <FormGroup>
        <Toggle>
          {({ on, off, toggle }) => (
            <div className="toggle-container address-text">
              {on && (
                <Input
                  type="text"
                  name="co_bil_address2"
                  id="coBillAddress2"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              )}
              {off && (
                <div onClick={toggle}>
                  <p>
                    <img
                      className="toggle-ico"
                      src={PlusIcon}
                      alt="expand icon"
                    />{" "}
                    Add Address line 2
                  </p>
                </div>
              )}
            </div>
          )}
        </Toggle>
      </FormGroup>
      <Row form>
        <Col md={5}>
          <FormGroup className="dropdown-container">
            <Label for="coBillCountry">Provinsi</Label>
            <ProvinsiOptions />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="dropdown-container">
            <Label for="coBillState">Kota</Label>
            <KotaOptions />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
          <Label for="Daerah">Daerah</Label>
          <Label for="coBillDaerah">Daerah</Label>
            <DaerahOptions />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
          <Label for="coZip">Pos</Label>
            <Input
              className="Pos-input"
              type="text"
              name="co_bil_Pos"
              id="coBillPos"
              placeholder="Kode Pos"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          type="phone"
          name="co_bill_phone"
          id="coBilPhone"
          placeholder="No Telepon"
        />
      </FormGroup>
							<div className="button-right">
								<Button onClick={toggle} color="primary">Save</Button>
							</div>
						</div>}
					</div>
				)}
			</Toggle>
    </Form>
      : null;

    return (
      <Container className="billing-container">
        <Row className="container-fluid co-title-row">
          <h2>Alamat Tujuan</h2>
        </Row>
        <ListGroup>
          <FormGroup tag="fieldset">
            <ListGroupItem>
              <FormGroup check>
                <Input type="radio" name="coBillingSelection" onChange={ this.hideContent } defaultChecked />
                <Container>
                  <Row className="container-fluid">
                    <p>Sama Seperti Alamat Utama</p>
                  </Row>
                </Container>
              </FormGroup>
            </ListGroupItem>
            <ListGroupItem>
              <FormGroup check>
                <Input type="radio" name="coBillingSelection" checked={ this.state.checked } 
          onChange={ this.handleChange } />
                <Container>
                  <Row>
                    <p>Gunakan Alamat Lain</p>
                  </Row>
                </Container>
              </FormGroup>
            </ListGroupItem>
          </FormGroup>
        </ListGroup>
        { content }
      </Container>
    );
  }
}
