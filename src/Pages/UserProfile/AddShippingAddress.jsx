import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import { onSaveShippingAddress } from './../../Redux/Actions/UserProfile/ShippingAddressAction';

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
        },
        data: {
            address_detail: '',
            city: '',
            province: '',
            phone_number: '',
            receiver_name: '',
            users_id: 1,
            long: '',
            lat: ''
        },
        errorInput: {
            receiver_name: '',
            phone_number: '',
            address_detail: '',
            city: '',
            is_main_address: ''
        }
      }

      handleChange = address => {
        this.setState({ address })
      }
     
      handleSelect = address => {
        this.setState({ address });
        this.setState({errorInput: {...this.state.errorInput, city: ''}})

        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
            console.log('Success', latLng);
            console.log(latLng.lat, latLng.lng)
    
            // Update Center State Of Maps
            this.setState({ mapCenter: latLng });
            
            let city = String(address).split(',')[0]
            let province = String(address).split(',')[2].replace(' ', '')
            this.setState({data: {...this.state.data, city, province}})
            this.setState({data: {...this.state.data, long: latLng.lat, lat: latLng.lng}})
          })
          .catch(error => console.error('Error', error));
      }

      saveShippingAddress = () => {
        if(!this.state.data.receiver_name && !this.state.data.phone_number && !this.state.data.address_detail && !this.state.data.city){
            this.setState({errorInput: {...this.state.errorInput, receiver_name: 'Please Fill With Valid Consignee', phone_number: 'Please Fill With Valid Phone Number', address_detail: 'Please Fill With Valid Address', city: 'Please Fill With Valid City'}})
        }else if(!this.state.data.receiver_name && !this.state.data.phone_number && !this.state.data.address_detail){
            this.setState({errorInput: {...this.state.errorInput, receiver_name: 'Please Fill With Valid Consignee', phone_number: 'Please Fill With Valid Phone Number', address_detail: 'Please Fill With Valid Address'}})
        }else if(!this.state.data.receiver_name && !this.state.data.phone_number){
            this.setState({errorInput: {...this.state.errorInput, receiver_name: 'Please Fill With Valid Consignee', phone_number: 'Please Fill With Valid Phone Number'}})
        }else if(!this.state.data.receiver_name){
            this.setState({errorInput: {...this.state.errorInput, receiver_name: 'Please Fill With Valid Consignee'}})
        }else{
            this.props.onSaveShippingAddress(this.state.data)
            window.location = ("/member/shipping-address")
        }
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
                        <label  className="pa-main-light">Consignee</label>
                        <input type="text" onChange={(e) => this.setState({data: {...this.state.data, receiver_name: e.target.value}, errorInput: {...this.state.errorInput, receiver_name: ''}})} className={this.state.errorInput.receiver_name? "form-control is-invalid" : "form-control"} placeholder="Ex. Widodo C. Putro" />
                        {
                            this.state.errorInput.receiver_name?
                                <div className="pa-font-size-12 pa-danger">
                                    {this.state.errorInput.receiver_name}
                                </div>
                            :
                                null
                        }
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Phone Number</label>
                        <input type="text" onChange={(e) => this.setState({data: {...this.state.data, phone_number: e.target.value}, errorInput: {...this.state.errorInput, phone_number: ''}})} className={this.state.errorInput.phone_number? "form-control is-invalid" : "form-control"} placeholder="Ex. 081118140006" />
                        {
                            this.state.errorInput.phone_number?
                                <div className="pa-font-size-12 pa-danger">
                                    {this.state.errorInput.phone_number}
                                </div>
                            :
                                null
                        }
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Address</label>
                        <input type="text" onChange={(e) => this.setState({data: {...this.state.data, address_detail: e.target.value}, errorInput: {...this.state.errorInput, address_detail: ''}})} className={this.state.errorInput.address_detail? "form-control is-invalid" : "form-control"} placeholder="Ex. Jalan Puri Asri Blok C5, Sukapada, Kec. Cibeunying Kidul" />
                        {
                            this.state.errorInput.address_detail?
                                <div className="pa-font-size-12 pa-danger">
                                    {this.state.errorInput.address_detail}
                                </div>
                            :
                                null
                        }
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
                                    className: this.state.errorInput.address_detail? "form-control is-invalid" : "form-control",
                                    })}
                                />
                                {
                                    this.state.errorInput.city?
                                        <div className="pa-font-size-12 pa-danger">
                                            {this.state.errorInput.city}
                                        </div>
                                    :
                                        null
                                }
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
                    <div className="form-group">
                        <div className="form-check">
                            <input type="checkbox" onChange={(e) => this.setState({data: {...this.state.data, is_main_address: 1}})} className="form-check-input" />
                            <label className="form-check-label font-weight-bold pa-secondary">
                                Use For Main Address
                            </label>
                            <label className="form-check-label ml-1 mr-0 my-0 pa-secondary">
                                 (Your Main Addrss Will Be Change With This)
                            </label>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => this.saveShippingAddress()} className="btn mx-0 my-2 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                            Add Address
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToProps = (state) => {
    return{
        shippingAddress: state.shippingAddress
    }
}

const mapDispatchToProps = { onSaveShippingAddress }

export default GoogleApiWrapper({ apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI') })(connect(stateToProps, mapDispatchToProps)(AddShippingAddress))