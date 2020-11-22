import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

export class Footer extends React.Component {
    render(){
        return(
            <div>
                {/* FOOTER SECTION */}
                <div className="container-fluid border-top border-primary">
                    <div className="row justify-content-center px-0 py-5">
                        <div className="col-md-5 px-5 py-0">
                            <p className="mt-0 mb-1 font-weight-bold myfsid-dark"> TENTANG PEJOY ID </p>
                            <p className="mt-0 mb-0"> 
                                Pejoy Id adalah Pelopor Toko Online di Indonesia yang Menyediakan Produk Terlengkap dan Terpercaya.
                                Pejoy Siap Memenuhi Kebutuhan Fashion Anda, Mulai Dari Atasan Hingga Bawahan.
                            </p>
                            <p className="mt-3 mb-0"> 
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-md pa-danger" /> Address 1 : Sidoarjo, Jawa Timur, 61273.
                            </p>
                            <p className="mt-0 mb-0"> 
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-md pa-danger" /> Address 2 : Kota Bandung, Jawa Barat, 40125.
                            </p>
                            <p className="mt-3 mb-0"> 
                                <FontAwesomeIcon icon={faEnvelopeOpenText} className="fa-md" /> pejoyidid@pejoy.com
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-2">
                            <p className="mt-0 mb-1 font-weight-bold"> OUR PRODUCTS </p>
                            <p className="mt-3 mb-0"> 
                                T-Shirt
                            </p>
                            <p className="mt-3 mb-0"> 
                                Shirt
                            </p>
                            <p className="mt-3 mb-0"> 
                                Jacket
                            </p>
                            <p className="mt-3 mb-0"> 
                                Pants
                            </p>
                            <p className="mt-3 mb-0"> 
                                Shoes
                            </p>
                            <p className="mt-3 mb-0"> 
                                Accecories
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-2">
                            <p className="mt-0 mb-1 font-weight-bold"> SITEMAP </p>
                            <p className="mt-3 mb-0"> 
                                Products
                            </p>
                            <p className="mt-3 mb-0"> 
                                Brands
                            </p>
                            <p className="mt-3 mb-0"> 
                                Careers
                            </p>
                            <p className="mt-3 mb-0"> 
                                Privacy
                            </p>
                        </div>
                        <div className="col-11 col-md-3 mt-5 mb-0 mt-md-0 mb-md-0 px-4 py-0 px-md-5 py-md-0">
                            <p className="mb-1 font-weight-bold myfsid-dark"> FOLLOW US! </p>
                            <p><input type="button" value="Twitter" className="w-100 mt-3 mb-0"/></p>
                            <p><input type="button" value="Instagram" className="w-100 mt-3 mb-0"/></p>
                            <p><input type="button" value="Facebook" className="w-100 mt-3 mb-0"/></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer