import React from 'react';
import { Input } from "reactstrap";

class provinsiOptions extends React.Component {
    render() {
		return (
			<Input className="custom-select" type="select" name="Provinsi" id="Provinsi">
                <option value="" disabled="">Provinsi</option>
                <option data-code="JKR" defaultValue="selected" value="DKI Jakarta">DKI Jakarta</option>
                <option data-code="JBR" value="Jawa Barat">Jawa Barat</option>
                <option data-code="JTN" value="Jawa Tengah">Jawa Tengah</option>
                <option data-code="JTM" value="Jawa Timur">Jawa Timur</option>
            </Input>
		);
	}
}

export default provinsiOptions;