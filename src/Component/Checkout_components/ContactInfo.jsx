import React from "react";
import { Alert, Col, Row, Form, FormGroup, Input, Label, Button } from "reactstrap";
import Toggle from '../Toggle.jsx';
import ProvinsiOptions from './input_options/provinsiOptions.jsx';
import KotaOptions from './input_options/kotaOptions.jsx';
import DaerahOptions from './input_options/daerahOptions.jsx';
import PlusIcon from '../../Support/Images/_ionicons_svg_md-add.png';

export default class FormContactInfo extends React.Component {
  render() {
    return (
		<Form className="container-fluid contact-info-container">
			<h2 className="mb-3">Kontak Informasi</h2>
			<Toggle>
				{({ on, off, toggle }) => (
					<div className="toggle-container">
						{on && <div>
							<Alert color="success">Kontak anda telah di simpan</Alert>
							<div className="button-right">
								<Button onClick={toggle} color="secondary">Edit</Button>
							</div>
						</div>}
						{off && <div>
							<FormGroup>
								<Input type="email" name="co_email" id="coContactEmail" placeholder="Email (Untuk Konfirmasi)" />
							</FormGroup>
							<Row form>
								<Col md={6}>
									<FormGroup>
										<Input type="text" name="co_first_name" id="coFirstName" placeholder="First name" />
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Input type="text" name="co_last_name" id="coLastName" placeholder="Last name" />
									</FormGroup>
								</Col>
							</Row>
							<FormGroup>
								<Input type="text" name="co_address" id="coAddress" placeholder="Alamat" />
							</FormGroup>
							<FormGroup>
								<Toggle>
									{({ on, off, toggle }) => (
										<div className="toggle-container address2-text">
											{on && <Input type="text" name="co_address2" id="coAddress2" placeholder="Apartment, suite, etc. (optional)" />}
											{off && <div onClick={toggle}><p className="p-xs"><img className="toggle-ico" src={PlusIcon} alt="expand icon" /> Add Address line 2</p></div>}
										</div>
									)}
								</Toggle>
							</FormGroup>
							<Row form>
								<Col md={5}>
									<FormGroup className="dropdown-container">
										<Label for="coProvinsi">Provinsi</Label>
										<ProvinsiOptions />
									</FormGroup>
								</Col>
								<Col md={4}>
									<FormGroup className="dropdown-container">
										<Label for="coKota">Kota</Label>
										<KotaOptions />
									</FormGroup>
								</Col>
								<Col md={3}>
									<FormGroup className="dropdown-container">
										<Label for="coDaerah">Daerah</Label>
										<DaerahOptions />
									</FormGroup>
								</Col>
								<Col md={3}>
									<FormGroup>
										<Label for="coZip">Kode Pos</Label>
										<Input className="zip-input" type="text" name="co_zipcode" id="coZipCode" placeholder="Kode Pos" />
									</FormGroup>
								</Col>
							</Row>
							<FormGroup>
								<Input type="phone" name="co_phone" id="coPhone" placeholder="No Telepon" />
							</FormGroup>
							<div className="button-right">
								<Button onClick={toggle} color="primary">Save</Button>
							</div>
						</div>}
					</div>
				)}
			</Toggle>
		</Form>
    );
  }
}
