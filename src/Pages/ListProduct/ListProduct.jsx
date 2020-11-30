import { faChevronDown, faChevronUp, faSearch, faSlidersH, faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import CardProduct from '../../Component/CardProduct'
import './CardProduct.css'
import './SortProduct.css'
import { Collapse } from 'reactstrap';
import Axios from 'axios'
import { ApiUrl } from '../../Constant/ApiUrl'
import { getQuery } from '../../Support/Functions/getSeacrh'

const ratingStar = [
    {star : 1}, {star : 2}, {star : 3}, {star : 4}, {star : 5}
]

const ListProduct = (props) => {

    const [data, setData] = useState(null)
    const [filter, setFilter] = useState({
        category : null,
        brands : null,
        rating : null,
        discount : null
    })
    const [isOpen, setIsOpen] = useState({
        child_1 : false,
        child_2 : false,
        child_3 : false,
        child_4 : false,
        child_5 : false
    }); 
    let [inputCategory, setInputCategory] = useState({
        category : [],
        rating : [],
        price : [],
        brands : [],
        discount : ''
    })
    const [priceToInput, setPriceToInput] = useState({
        price1 : '',
        price2 : ''
    })
    
    useEffect(() => {
        getAllProduct()
        getFilter()
    },[])

    console.log(filter.category)

    
    const onHandleCheckCategory = (e) => {
        if(e.target.checked === true){
            inputCategory.category.push(e.target.value)
        }else{
            inputCategory.category = inputCategory.category.filter(a => a !== e.target.value)
            
        }
        
        getProductByFilter()
    }

    const onHandleCheckRating = (e) => {
        if(e.target.checked === true){
            inputCategory.rating.push(e.target.value)
        }else{
            inputCategory.rating = inputCategory.rating.filter(a => a !== e.target.value)
        }
        
        getProductByFilter()
    }
    const onHandleCheckBrands = (e) => {
        if(e.target.checked === true){
            inputCategory.brands.push(e.target.value)
        }else{
            inputCategory.brands = inputCategory.brands.filter(a => a !== e.target.value)
        }
        
        getProductByFilter()
    }
    const onHandleCheckDiscount = (e) => {
        inputCategory.discount = e.target.value
        getProductByFilter()
    }

    const onHandlePrice = () => {
        // if(priceToInput.price1 !== '' && priceToInput.price2 !== '' ){
        // }
        setInputCategory({...inputCategory,price : [priceToInput.price1, priceToInput.price2]})
        console.log(inputCategory)
    }
    console.log(priceToInput)
    
   
    
    const getAllProduct = () => {
        let query = getQuery(props.location.search)
        console.log(query)
        console.log(inputCategory)
        Axios.post(ApiUrl + 'products/filter/category', query)
        .then((res) => {
            try {
                if(res.data.error) throw new Error
                setData(res.data.filterCategory)
            } catch (error) {
                console.log(error)
            }
        })
        .catch((err) => {
            console.log(err)
        })

    }

    const getFilter = () => {
        
        Axios.get(ApiUrl + 'products/filter')
        .then((res) => {
            try {
                if(res.data.error) throw new Error
                setFilter({...filter, category : res.data.category.map(v => ({...v, isChecked: false})), brands : res.data.brands, rating : res.data.rating, discount : res.data.discount})
            } catch (error) {
                console.log(error)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getProductByFilter = () => {
        Axios.post(ApiUrl + 'products/filter/multi-category', inputCategory)
        .then((res) => {
            try {
                if(res.data.error) throw new Error
                setData(res.data.filterCategory)
            } catch (error) {
                console.log(error)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    
    
    
    return (
        <div className='container' style={{paddingTop : 120, paddingBottom : 120}}>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginBottom : 60}}>
                <img 
                style={{width : '100%', height : 250, objectFit : 'cover'}}
                src='https://images.unsplash.com/photo-1513617332477-a365e97b52a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80' />
            </div>
            
            <div className='row'>
                <div className='col-md-3' style={{paddingRight : 30, paddingTop : 5, width : 270, }}>
                    <div style={{display : 'flex', alignItems : 'center', justifyContent : 'space-between', marginBottom : 20}}>
                        <p style={{fontSize : 20}}>Filter</p>
                        <FontAwesomeIcon icon={faSlidersH} />
                    </div>
                    <div>
                        <div onClick={() => setIsOpen({...isOpen, child_1 : !isOpen.child_1})} style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between'}} >
                            <p>Kategori</p>
                            <FontAwesomeIcon icon={isOpen.child_1 ? faChevronUp : faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <div style={{padding : 10}}>
                        <Collapse isOpen={isOpen.child_1}>                            
                            {
                                filter.category && filter.category.map((val,i) => {
                                    return(
                                        <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                            <input 
                                            type="checkbox" 
                                            onClick={(e) => onHandleCheckCategory(e)}
                                            style={{width : 16, height : 16}}
                                            value={val.id}
                                            />
                                            <p style={{marginLeft : 10}}>{val.category_name}</p>
                                        </span>
                                    )
                                })
                            }
                        </Collapse>
                        </div>
                    </div>
                    

                    <div>
                        <div className='border-top pt-2' onClick={() => setIsOpen({...isOpen, child_2 : !isOpen.child_2})} style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between'}} >
                            <p>Rating</p>
                            <FontAwesomeIcon icon={isOpen.child_2 ? faChevronUp : faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <div style={{padding : 10}}>
                        <Collapse isOpen={isOpen.child_2}>                            
                            {
                                ratingStar.map((val,index) => {
                                    return(
                                        <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                            <input 
                                            type="checkbox" 
                                            onClick={(e) => onHandleCheckRating(e)}
                                            style={{width : 16, height : 16}}
                                            value={val.star}
                                            />

                                            <span style={{marginLeft : 10}}>
                                            {
                                            Array.apply(null, {length: val.star}).map(Number.call, Number).map((val) => {
                                                return(
                                                    <FontAwesomeIcon icon={faStar} style={{color : 'orange', fontSize : 12}} />
                                                )
                                            })
                                            }
                                            </span>
                                            
                                        </span>
                                    )
                                })
                            }
                        </Collapse>
                        </div>
                    </div>
                    <div>
                        <div className='border-top pt-2' onClick={() => setIsOpen({...isOpen, child_3 : !isOpen.child_3})} style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between'}} >
                            <p>Price</p>
                            <FontAwesomeIcon icon={isOpen.child_3 ? faChevronUp : faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <div style={{padding : 10}}>
                        <Collapse isOpen={isOpen.child_3}>                            
                            <span style={{paddingTop : 5,display : 'flex', flexWrap : 'wrap', justifyContent : 'space-between', alignItems : 'center'}}>
                                <span>
                                    <p style={{fontSize : 14, marginBottom : 3}} for="formControlRange">Min-Price</p>
                                    <input type='number' onChange={(e) => setPriceToInput({...priceToInput, price1 : e.target.value})} value={priceToInput.price1} style={{width : 80, fontSize : 12}} />
                                </span>
                                <span>-</span>
                                <span>
                                    <p style={{fontSize : 14, marginBottom : 3}} for="formControlRange">Max-Price</p>
                                    <input onSubmit={onHandlePrice} type='number' onChange={(e) => setPriceToInput({...priceToInput, price2 : e.target.value})} value={priceToInput.price2}  style={{width : 80, fontSize : 12}} />
                                </span>
                            </span>
                                  
                        </Collapse>
                        </div>
                    </div>

                    <div>
                        <div className='border-top pt-2' onClick={() => setIsOpen({...isOpen, child_4 : !isOpen.child_4})} style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between'}} >
                            <p>Brands</p>
                            <FontAwesomeIcon icon={isOpen.child_4 ? faChevronUp : faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <div style={{padding : 10}}>
                            <Collapse isOpen={isOpen.child_4}>                            
                                {
                                    filter.brands && filter.brands.map((val,index) => {
                                        return(
                                            <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                                <input 
                                                type="checkbox" 
                                                onClick={(e) => onHandleCheckBrands(e)}
                                                style={{width : 16, height : 16}}
                                                value={val.id}
                                                />
                                                <p style={{marginLeft : 10}}>{val.brands_name}</p>
                                            </span>
                                        )
                                    })
                                }
                            </Collapse>
                        </div>

                        <div>
                        <div className='border-top pt-2' onClick={() => setIsOpen({...isOpen, child_5 : !isOpen.child_5})} style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between'}} >
                            <p>Discount</p>
                            <FontAwesomeIcon icon={isOpen.child_5 ? faChevronUp : faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <div style={{padding : 10}}>
                        <Collapse isOpen={isOpen.child_5}>                            
                        
                            <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                <input 
                                type="radio"
                                name='radioButton'
                                onClick={(e) => onHandleCheckDiscount(e)} 
                                style={{width : 16, height : 16}}
                                value='< 25'
                                />
                                <p style={{marginLeft : 10}}>0 - 25%</p>
                            </span>
                            <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                <input 
                                type="radio" 
                                name='radioButton'
                                onClick={(e) => onHandleCheckDiscount(e)} 
                                style={{width : 16, height : 16}}
                                value='> 25'
                                />
                                <p style={{marginLeft : 10}}>25% or above</p>
                            </span>
                               
                        </Collapse>
                        </div>
                    </div>

                    </div>
                    
                    
                </div>
                <div className='col-md-9 row'>
                    {
                        data && data.map((val, i) => {
                            return(
                                <CardProduct 
                                name={val.name} 
                                brands={val.brands_name} 
                                price={val.price} 
                                image1={val.url.split(',')[0]} 
                                image2={val.url.split(',')[1]} 
                                discount={val.discount}
                                flashSale={val.is_flash_sale}
                                starCount={val.rating}
                                id={val.id}
                                />
                            )
                        })
                    }
                    

                </div>
                
            </div>
            
        </div>
    )
}

export default ListProduct


// useEffect(() => {
    //     window.addEventListener('scroll', listenToScroll)
    //     return function (){
    //         window.removeEventListener('scroll', listenToScroll)
    //       };
    // }, [])

 // const listenToScroll = () => {
    //     const winScroll =
    //       document.body.scrollTop || document.documentElement.scrollTop
      
    //     const height =
    //       document.documentElement.scrollHeight -
    //       document.documentElement.clientHeight
      
    //     const scrolled = winScroll / height
      
    //     setHap(scrolled)
    // }

    // const [hap, setHap] = useState(0)