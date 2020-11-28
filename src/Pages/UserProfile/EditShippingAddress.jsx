import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Skeleton from 'react-loading-skeleton';

import { onGetShippingAddressToEdit, onUpdateShippingAddress } from './../../Redux/Actions/UserProfile/shippingAddressAction';

import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner'

import './UserProfile.css';

export class EditShippingAddress extends Component{

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
            id: '',
            address_detail: '',
            city: '',
            province: '',
            phone_number: '',
            receiver_name: '',
            users_id: 1,
            long: '',
            lat: '',
            is_main_address: 0
        },
        errorInput: ''
      }

      componentDidMount(){
        const data =  {
            id: Number(window.location.pathname.split('/')[4])
        } 

        this.props.onGetShippingAddressToEdit(data)
        
        this.setState({
            data: {
                id: this.props.shippingAddress.data.data[0].id,
                address_detail: this.props.shippingAddress.data.data[0].address_detail,
                city: this.props.shippingAddress.data.data[0].city,
                province: this.props.shippingAddress.data.data[0].province,
                phone_number: this.props.shippingAddress.data.data[0].phone_number,
                receiver_name: this.props.shippingAddress.data.data[0].receiver_name,
                users_id: this.props.shippingAddress.data.data[0].users_id,
                long: this.props.shippingAddress.data.data[0].long,
                lat: this.props.shippingAddress.data.data[0].lat,
                is_main_address: this.props.shippingAddress.data.data[0].is_main_address
            } 
        })
      }

      handleChange = address => {
        this.setState({ address })
      }
     
      handleSelect = address => {
        this.setState({ address });
        this.setState({errorInput: ''})

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

      updateShippingAddress = () => {
        if(!this.state.data.receiver_name || !this.state.data.phone_number || !this.state.data.address_detail || !this.state.data.city){
            this.setState({errorInput: 'Please Fill Your Valid Data!'})
        }else{
            this.props.onUpdateShippingAddress(this.state.data)
            window.location = ("/member/shipping-address")
        }
      }

    render(){
        if(this.props.shippingAddress.data === null){
            return(
                <div>
                    <div className="row justify-content-start align-items-center px-3 py-0">
                        <div className="pl-0 pr-3 py-0" style={{marginTop: -5, marginBottom: 0}}>
                            <Link to="/member/shipping-address" className="pa-link pa-font-size-25">
                                <Skeleton width={35} height={35} duration={1} />
                            </Link>
                        </div>
                        <div>
                            <div className="font-weight-bold pa-font-size-30" style={{marginTop: -5, marginBottom: 0}}>
                                <Skeleton width={350} height={35} duration={1} />
                            </div>
                        </div>
                    </div>
                    <div className="px-0 py-4">
                        <div className="form-group">
                            <Skeleton width={150} height={15} duration={1} />
                            <Skeleton width="100%" height={35} duration={1} />
                        </div>
                        <div className="form-group">
                            <Skeleton width={150} height={15} duration={1} />
                            <Skeleton width="100%" height={35} duration={1} />
                        </div>
                        <div className="form-group">
                            <Skeleton width={150} height={15} duration={1} />
                            <Skeleton width="100%" height={35} duration={1} />
                        </div>
                        <Skeleton width={150} height={15} duration={1} />
                        <Skeleton width="100%" height={35} duration={1} />
                        <div className="form-group">
                            <Skeleton width={250} height={15} duration={1} />
                        </div>
                        <div>
                            <div className="btn mx-0 my-3 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
                                <Skeleton width={150} height={15} duration={1} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

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
                            Edit Address
                        </div>
                    </div>
                </div>
                <div className="px-0 py-4">
                    <div className="form-group">
                        <label  className="pa-main-light">Consignee</label>
                        <input type="text" value={this.state.data.receiver_name} onChange={(e) => this.setState({data: {...this.state.data, receiver_name: e.target.value}})} className="form-control" placeholder="Ex. Widodo C. Putro" />
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Phone Number</label>
                        <input type="text" value={this.state.data.phone_number} onChange={(e) => this.setState({data: {...this.state.data, phone_number: e.target.value}})} className="form-control" placeholder="Ex. 081118140006" />
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">Address</label>
                        <input type="text" value={this.state.data.address_detail} onChange={(e) => this.setState({data: {...this.state.data, address_detail: e.target.value}})} className="form-control" placeholder="Ex. Jalan Puri Asri Blok C5, Sukapada, Kec. Cibeunying Kidul" />
                    </div>
                    <div className="form-group">
                        <label  className="pa-main-light">City</label>
                        <input type="text" disabled value={this.state.data.city} onChange={(e) => this.setState({data: {...this.state.data, address_detail: e.target.value}})} className="form-control" placeholder="Ex. Jalan Puri Asri Blok C5, Sukapada, Kec. Cibeunying Kidul" />
                    </div>
                    {
                        this.state.errorInput?
                            <Alert isOpen={alert} toggle="" className="border-0 text-center pa-bg-danger pa-light">
                                {this.state.errorInput}
                            </Alert>
                        :
                            null
                    }
                    <div className="form-group">
                        <div className="form-check">
                            <input type="checkbox" checked={this.state.data.is_main_address === 1? true : false} onChange={(e) => e.target.checked === true? this.setState({data: {...this.state.data, is_main_address: 1}}) : this.setState({data: {...this.state.data, is_main_address: 0}})} className="form-check-input" />
                            <label className="form-check-label font-weight-bold pa-secondary">
                                Use For Main Address
                            </label>
                            <label className="form-check-label ml-1 mr-0 my-0 pa-secondary">
                                 (Your Main Addrss Will Be Change With This)
                            </label>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => this.updateShippingAddress()} className="btn mx-0 my-2 px-5 py-2 font-weight-bold pa-button-submit pa-main-light" style={{borderRadius: 10}}>
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

const mapDispatchToProps = { onGetShippingAddressToEdit, onUpdateShippingAddress }

export default GoogleApiWrapper({ apiKey: ('AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI') })(connect(stateToProps, mapDispatchToProps)(EditShippingAddress))