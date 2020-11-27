import React from 'react';
import { Input } from "reactstrap";

class DaerahOptions extends React.Component {
    render() {
		return (
			<Input className="custom-select" type="select" name="Daerah" id="Daerah">
                <option value="" disabled="">Daerah</option>
                <option data-code="CNK" defaultValue="selected" value="Cinunuk">Cinunuk</option>
                <option data-code="CBR" value="Cibiru">Cibiru</option>
                <option data-code="CNY" value="Cileunyi">Cileunyi</option>
                <option data-code="CJR" value="Cijeurah">Cijeurah</option>
            </Input>
		);
	}
}

export default DaerahOptions;