import moment from 'moment'
import React, {useState} from 'react'
import { ApiUrl } from '../../../Constant/ApiUrl'

export const CardCart = ({productName, brand, price, discount, size, image, qty, stock, est, cityGudang}) => {
    
    return (
        <div className='row border mb-3'>
            <div className='col-md-2 p-2'>
                <img 
                src={ApiUrl + 'public/product/' + image} 
                className='aa-image-thumb'
                alt='image-product'
                />
            </div>
            <div className='col-md-6 p-2 container-product-info-cart'>
                <div>
                    <p className='aa-title-text'>{productName}</p>
                    <p className='aa-brands-name-cart'>{brand}</p>
                </div>

                <div className='aa-container-option-cart'>
                    <p className='aa-option-cart'>Size : {size}</p>
                    <p className='aa-option-cart'>Estimated Delivery Date : {est && moment(new Date()).add(est, 'days').format('L')}</p>
                    <p className='aa-option-cart shipping-cart'>*Shipping from <span style={{textDecoration : 'underline'}}>{cityGudang && cityGudang}</span> warehouse to your shipping address</p>
                    <p className='aa-option-cart-smaller'>Change shipping Address ?</p>
                </div>

            </div>
            <div className='col-md-4 p-2 pr-4' style={{display : 'flex', flexDirection : 'column', alignItems : 'flex-end', justifyContent : 'space-around'}}>
                <span style={{display :'flex'}}>
                    <p>Rp. {price && (price * qty).toLocaleString('id-ID')}</p>
                </span>
                <span >
                    <input min={0} max={stock} type='number' style={{width : 50, fontSize : 14, textAlign : 'center'}} defaultValue={qty}/>
                    <p style={{fontSize : 11, marginTop : 5, color : 'red'}}>Out of stock</p>
                </span>
                <div style={{display : 'flex'}}>
                    <p style={{fontSize : 12, textDecoration : 'underline', cursor : 'pointer'}}>SAVE FOR LATER</p>
                    <p style={{fontSize : 12, textDecoration : 'underline', marginLeft : 10, cursor : 'pointer'}}>REMOVE</p>
                </div>
            </div>
        </div>
    )
}
