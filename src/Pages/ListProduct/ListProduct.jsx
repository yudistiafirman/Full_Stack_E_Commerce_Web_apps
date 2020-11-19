import React from 'react'
import './ListProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const ListProduct = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 border' style={{padding : 10, backgroundSize: 'cover',backgroundPosition: 'center'}}>
                    <div className='border'>
                    <div className=' container-image w-100' style={{padding : 10}}>
                        <img 
                        className=''
                        style={{maxWidth : '100%', height : 'auto', position: 'relative' }}
                        src='https://images.freshop.com/00041383090363/7f213cf018f31573c7f942fd564d255a_large.png'
                        
                        />
                    </div>
                    <span style={{position : 'absolute',top : 11, left : 11,backgroundColor : 'salmon', padding : 5, fontSize : 12, color : 'white'}}>
                        Best Seller
                    </span>
                    <div style={{marginTop : 10, padding : 10}}>
                        <p style={{fontSize : 14}}>
                            Hometown fresh milk 1 lt
                        </p>
                        <p>
                            Rp. 13.500
                        </p>
                        <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 15}}/>
                        <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 15}}/>
                        <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 15}}/>
                        <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 15}}/>
                    </div>
                    </div>
                </div>

                <div className='col-md-3 border' style={{padding : 10}}>
                    <div className=' container-image w-100' style={{padding : 10}}>
                        <img 
                        className=''
                        style={{maxWidth : '100%', height : 'auto', }}
                        src='https://assets.sainsburys-groceries.co.uk/gol/181402/1/640x640.jpg'
                        
                        />
                    </div>
                    <span style={{position : 'absolute',top : 11, left : 11,backgroundColor : 'salmon', padding : 5, fontSize : 12, color : 'white'}}>
                        Best Seller
                    </span>
                    <div style={{marginTop : 15, }}>
                        <p>
                            Hometown fresh milk 1 lt
                        </p>
                        <p>
                            Rp. 13.500
                        </p>
                        
                    </div>
                </div>

                <div className='col-md-2'>
                    <div className='border'>
                        <div>
                            jajaja
                        </div>
                    </div>
                </div>

                <div className='col-md-2'>
                    <div className='border'>
                        <div>
                            jajaja
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default ListProduct
