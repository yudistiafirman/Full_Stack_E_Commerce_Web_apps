import React, {useState, useEffect} from 'react'
import './DetailProduct.css'
import { ImageGroup } from './DetailProductComponent/ImageGroup'
import MdStar from 'react-ionicons/lib/MdStar'
import MdStarOutline from 'react-ionicons/lib/MdStarOutline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Axios from 'axios';
import { ApiUrl } from '../../Constant/ApiUrl';
import CardReview from './DetailProductComponent/CardReview'
import { Link } from 'react-router-dom'


const data = [
    'S', 'M', 'L', 'XL'
]
const DetailProduct = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [size, setSize] = useState({
        uk :'Pick a Size',
        price : 0,
        variant_product_id : 0
    })
    const [tabs, setTabs] = useState('review')
    const [dataApi, setDataApi] = useState({
        productInfo : null,
        image : null,
        size : null,
        avgRating : null
    })
    const [review, setReview] = useState(null)

    useEffect(() => {
        getDetailData()
    }, [])

    
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const getDetailData = () => {
        let id = props.match.params.id
        Axios.get(ApiUrl + 'products/' + id)
        .then((res) => {
            try {
                if(res.data.error) throw new Error
                if(res.data.productReview.length > 0){
                    setReview(res.data.productReview)
                }
                setDataApi({...dataApi, productInfo : res.data.productInformation[0], avgRating : res.data.avgRat , image : res.data.productImage, size : res.data.productSize})
                
            } catch (error) {
                console.log(error)
            }
        })
        .catch((err) => {
            console.log(err)
        })   
    }

    // const renderPrice = () => {
    //     if(dataApi.productInfo.discount)
    // }

    
    return (
        <div className='container' style={{paddingTop : 120}}>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='pb-4 border-bottom'>
                        <ImageGroup data={dataApi.image} />
                    </div>
                    <div className='pt-3 pb-3 container-tabs' >
                        <span onClick={() => setTabs('review')} style={{marginRight : 25, cursor : 'pointer'}} className={tabs === 'review' ? 'border-bottom font-weight-bold' : ''}>
                            <p>Review</p>
                        </span>
                        <span style={{marginRight : 25, cursor : 'pointer'}}>
                            <p>Shipping Informaton</p>
                        </span>
                        <span style={{marginRight : 25, cursor : 'pointer'}}>
                            <p>Refund Policy</p>
                        </span>
                    </div>
                    

                    <div style={{display : tabs === 'review' ? 'block' : 'none'}}>
                        {
                            review ?
                            <p style={{fontSize : 13, marginTop : 5}}>Ratings and reviews from our Community</p>
                            :
                            <p style={{fontSize : 13, marginTop : 5}}>Add your review to the community. It's quick and easy.</p>
                        }
                        {
                            review ?
                            <CardReview review={review} rating={dataApi.avgRating && dataApi.avgRating} />
                            :
                            <div className="border pr-5 pl-5 pt-2 pb-2 mt-3 mb-3" style={{display : 'inline-block'}}>
                                <p>Add your Review</p>
                            </div>

                        }
                    </div>

                </div>
                <div className='col-md-5 pl-5 pr-4'>
                    <div className='border-bottom pb-4'>
                        <p style={{fontSize : 30}}>{dataApi.productInfo && dataApi.productInfo.brands_name}</p>
                        <p style={{fontSize : 18}}>{dataApi.productInfo && dataApi.productInfo.name}</p>
                        <div style={{display : 'flex', alignItems : 'center'}}>
                            {
                                review ?
                                <span className=''>
                                    {
                                        Array.apply(null, {length: dataApi.avgRating && dataApi.avgRating}).map(Number.call, Number).map((val) => {
                                            return(
                                                <MdStar fontSize="15px" color='orange' />
                                            )
                                        })
                                    }
                                    {
                                        Array.apply(null, {length: dataApi.avgRating && 5 - dataApi.avgRating}).map(Number.call, Number).map((val) => {
                                            return(
                                                <MdStarOutline fontSize="15px" color='orange' />
                                            )
                                        })
                                    }
                                </span>
                                :
                                Array.apply(null, {length: 5}).map(Number.call, Number).map((val) => {
                                    return(
                                        <MdStarOutline fontSize="15px" color='orange' />
                                    )
                                })
                            }

                            {
                                review ?
                                <p className='ml-1' style={{fontSize : 13, fontWeight : 'lighter'}}>({review.length}) review</p> 
                                :
                                <p className='ml-1' style={{fontSize : 13, fontWeight : 'lighter'}}>Write the first review</p> 
                            }
                        </div>
                        <div style={{marginTop : 15}}>
                            {
                                dataApi.productInfo && dataApi.size && dataApi.productInfo.discount === 0 ?
                                <p 
                                style={{fontSize : 18}}>
                                    Rp. {size.uk === 'Pick a Size' ? dataApi.size[0].price : size.price }
                                </p>
                                :
                                <span>
                                    <p style={{fontSize : 18}}><s>Rp. {size.uk === 'Pick a Size' ? dataApi.size && dataApi.size[0].price.toLocaleString('id-ID')  : size.price.toLocaleString('id-ID')  }</s></p>
                                    <p style={{fontSize : 18}}>
                                        Now Rp.
                                        {
                                            size.uk === 'Pick a Size' ? 
                                            dataApi.size && dataApi.productInfo && dataApi.size[0].price - (dataApi.size[0].price * (dataApi.productInfo.discount /100)).toLocaleString('id-ID')  
                                            : 
                                            dataApi.productInfo && size.price - (size.price * (dataApi.productInfo.discount /100)).toLocaleString('id-ID') 
                                        }
                                    </p>
                                </span>
                            }
                        </div> 
                    </div>
                    <div className='border-bottom pb-4'>
                        <div style={{marginTop : 15}}>
                            <p style={{fontSize : 18, marginBottom : 10}}>Description</p>
                            <p style={{fontSize : 12}}>
                                {dataApi.productInfo && dataApi.productInfo.description}
                            </p>
                        </div>  
                    </div>

                    <div className='pt-4 pb-4'>
                        <div className='border pt-2 pb-2 pl-3 pr-2' style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
                            <p>{size.uk}</p>
                            <FontAwesomeIcon onClick={() => setDropdownOpen(!dropdownOpen)} icon={faPlus} />
                        </div>
                        <div className='border pt-2 pb-2 pl-3 pr-4 mt-1 choice-size' style={{backgroundColor : '#fff',width : '85%',display : dropdownOpen ? 'block' : 'none', opacity : 1, position : 'absolute'}}>
                            {dataApi.size && dataApi.size.map((val, index) => {
                                return(
                                    <div onClick={() => {setSize({...size, uk : val.size, price : val.price, variant_product_id : val.variant_product_id});setDropdownOpen(false)}} style={{cursor : 'pointer'}}>{val.size}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div style={{display : 'flex'}}>
                        <div className={size.uk !== 'Pick a Size' ? 'border pt-2 pb-2 pl-3 pr-4 button-add-to-cart' : 'border pt-2 pb-2 pl-3 pr-4 button-add-to-cart-disable'} style={{flex : 1,display : 'flex', alignItems : 'center', justifyContent : 'space-between'}}>
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