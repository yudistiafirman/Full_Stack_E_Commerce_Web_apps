import React from 'react';
import { Input } from "reactstrap";

class stateOptions extends React.Component {
    render() {
		return (
			<Input className="custom-select" type="select" name="Kota" id="Kota">
                <option value="" disabled="">Kota</option>
				<option data-code="JKT" value="Jakarta">Jakarta</option>
				<option data-code="BDN" value="Bandung">Bandung</option>
				<option data-code="SRB" value="Surabaya">Surabaya</option>
				<option data-code="BKS" value="Bekasi">Bekasi</option>
            </Input>
		);
	}
}

export default stateOptions;