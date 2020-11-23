import React, {useState} from 'react'
import './DetailProduct.css'
import { ImageGroup } from './DetailProductComponent/ImageGroup'
import MdStar from 'react-ionicons/lib/MdStar'
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

const data = [
    'S', 'M', 'L', 'XL'
]
const DetailProduct = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [size, setSize] = useState('Pick a Size')

    
    return (
        <div className='container' style={{paddingTop : 120}}>
            <div className='row'>
                <ImageGroup />
                <div className='col-md-5 pl-5 pr-4'>
                    <div className='border-bottom pb-4'>
                        <p style={{fontSize : 30}}>Deus Ex Machina</p>
                        <p style={{fontSize : 18}}>The Temple Enthusiast</p>
                        <div style={{display : 'flex', alignItems : 'center'}}>
                            <span className=''>
                                <MdStar fontSize="15px" color='orange' />
                                <MdStar fontSize="15px" color='orange' />
                                <MdStar fontSize="15px" color='orange' />
                                <MdStar fontSize="15px" color='orange' />
                                <MdStar fontSize="15px" color='orange' />
                            </span>
                            <p className='ml-1' style={{fontSize : 13, fontWeight : 'lighter'}}>(117) review</p>  
                        </div>
                        <div style={{marginTop : 15}}>
                            <p style={{fontSize : 18}}> <s>Rp. 400.000</s></p>
                            <p style={{fontSize : 18}}>Now Rp. 300.000</p>
                        </div>
                        <div style={{marginTop : 15}}>
                            <p style={{fontSize : 12}}>
                                Every closet needs a go-to t-shirt. This one takes it to the next level with subtle outdoor-inspired details and a classic fit of soft cotton jersey.
                                <span style={{marginLeft : 5, textDecoration : 'underline'}}>See more</span>
                            </p>
                        </div>   
                    </div>
                    <div className='pt-3 pb-4 border-bottom'>
                        <p style={{fontSize : 18, marginBottom : 15}}>More Colors</p>
                        <div>
                            <span>
                                <img 
                                className='more-color-image'
                                src='https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' />
                            </span>
                            <span>
                                <img 
                                className='more-color-image'
                                src='https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' />
                            </span>
                            <span>
                                <img 
                                className='more-color-image'
                                src='https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' />
                            </span>
                        </div>
                        <p style={{fontSize : 12, marginTop : 10}}>Stock available 5 pcs</p>
                    </div>

                    <div className='pt-4 pb-4'>
                        <div className='border pt-2 pb-2 pl-3 pr-2' style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                            <p>{size}</p>
                            <FontAwesomeIcon onClick={() => setDropdownOpen(!dropdownOpen)} icon={faPlus} />
                        </div>
                        <div className='border pt-2 pb-2 pl-3 pr-4 mt-1 choice-size' style={{backgroundColor : 'rgba(250,250,250,0.7)',width : '85%',display : dropdownOpen ? 'block' : 'none', opacity : 1, position : 'absolute'}}>
                            {data.map((val, index) => {
                                return(
                                    <div onClick={() => {setSize(val);setDropdownOpen(false)}} style={{cursor : 'pointer'}}>{val}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div style={{display : 'flex'}}>
                        <div className='border pt-2 pb-2 pl-3 pr-4 button-add-to-cart' style={{flex : 1,display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                            <p>Add to Cart</p>
                        </div>
                        <div className='border-top border-bottom border-right p-3' style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                    <div style={{marginTop : 10}}>
                        <p style={{fontSize : 12}}>Shipping rate information</p>

                    </div>
                    

                </div>
                
            </div>
        </div>
    )
}

export default DetailProduct