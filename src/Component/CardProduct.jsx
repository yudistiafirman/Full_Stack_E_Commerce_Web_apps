import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardProduct = () => {
    const [onHover, setOnhover] = useState(false)
    return (
        <div className='col-md-3 ' style={{height : 500, padding : 10, backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div className='card-container' onMouseEnter={() => setOnhover(true)} onMouseLeave={() => setOnhover(false)} >
                <div className=' container-image w-100' style={{padding : 10}}>
                    <img 
                    className=''
                    style={{maxWidth : '100%', height : 'auto', position: 'relative' }}
                    src='https://images.freshop.com/00041383090363/7f213cf018f31573c7f942fd564d255a_large.png'
                    
                    />
                </div>
                <span style={{position : 'absolute',top : 10, left : 10,backgroundColor : 'salmon', padding : 5, fontSize : 12, color : 'white', borderTopLeftRadius : 10}}>
                    Best Seller
                </span>
                <div style={{marginTop : 10, padding : 10}}>
                    <p style={{fontSize : 12, color : 'green'}}>Lactacid</p>
                    <p style={{fontSize : 16}}>
                        Hometown fresh milk 1 lt
                    </p>
                    <p style={{marginTop : 5}}>
                        <s>Rp. 13.500</s>
                    </p>
                    <p>
                        Rp. 10.000
                    </p>
                    <div>
                        <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 12}}/>
                        <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 12}}/>
                        <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 12}}/>
                        <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 12}}/>
                    </div>
                </div>
                <div className='button-container'>
                    <div className='a-button' style={onHover ? {display : 'block'} : {display : 'none'}}>
                        <div className='a-button-inner'>
                            <p className='a-button-text'>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
