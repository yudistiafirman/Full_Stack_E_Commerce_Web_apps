import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner'

import './UserProfile.css';

export class AddShippingAddress extends Component{

    state = {
        address: '',

        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    
        mapCenter: {
          lat: 49.2827291,
          lng: -123.1207375
        }
      }

      handleChange = address => {
        this.setState({ address });
      }
     
      handleSelect = address => {
        this.setState({ address });
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            console.log('Success', latLng);
    
            // Update Center State Of Maps
            this.setState({ mapCenter: latLng });
          })
          .catch(error => console.error('Error', error));
      }

    render(){
        return(
            // ADD SHIPPING ADDRESS
            <div>
                <div className="row justify-content-start align-items-center px-3 py-0">
                    <div className="pl-0 pr-3 py-0" style={{marginTop: -5, marginBottom: 0}}>
                        <Link to="/member/shipping-address" className="pa-link pa-font-size-25">
                            <FontAwesomeIcon icon={faArrowCircleLeft} />
                        </Link>
                    </div>
                    <div>
                        <div className="font-weight-bold pa-font-size-30" style={{marginTop: -5, marginBottom: 0}}>
                            Shipping Address
                        </div>
                    </div>
                </div>
                <div className="px-0 py-4">
                    <div className="form-group">
                        <label className="pa-main-light">Address Label</label>
                        <input type="text" className="form-control" placeholder="Ex. Home, Office, Restaurant" />
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Consignee</label>
                        <input type="text" className="form-control" placeholder="Ex. Sutiyono Lamso" />
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Ex. 081118140006" />
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Address</label>
                        <input type="text" className="form-control" placeholder="Ex. Jalan Bandung No. 01" />
                    </div>
                    <PlacesAutocomplete
                        value={this.state.address}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div className="form-group">
                                <label  className="pa-main-light">City</label>
                                <input
                                    {...getInputProps({
                                    placeholder: "Ex. Bandung",
                                    className: "form-control",
                                    })}
                                />
                                <div>
                                    {
                                        loading && 
                                        <div>
                                            <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
                                        </div>
                                    }
                                    {
                                        suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'mx-0 my-3 pt-0 pb-3 border-bottom border-primary suggestion-item--active'
                                                : 'mx-0 my-3 pt-0 pb-3 border-bottom suggestion-item'
                                        
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fff', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' }
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                    })}
                                                >
                                                    <span className="pa-font-size-18">{suggestion.description}</span>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>
                        )}
                    </PlacesAutocomplete>
                    <div>
                        <div className="btn mx-0 my-2 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                            Add Address
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI') })(AddShippingAddress)