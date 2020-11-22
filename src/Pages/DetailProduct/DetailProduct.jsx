import React from 'react'
import './DetailProduct.css'
import { ImageGroup } from './DetailProductComponent/ImageGroup'
import MdStar from 'react-ionicons/lib/MdStar'


const DetailProduct = () => {
    return (
        <div className='container' style={{paddingTop : 120}}>
            <div className='row'>
                <ImageGroup />
                <div className='col-md-4 border'>
                    <p>Deus Ex Machina</p>
                    <p>The Temple Enthusiast</p>
                    <div>
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                        <MdStar style={{width : 20, height : 20}}  fontSize="60px" color='orange' />
                            
                    </div>
                    <p>RP. 400.000</p>

                </div>
                
            </div>
        </div>
    )
}

export default DetailProduct