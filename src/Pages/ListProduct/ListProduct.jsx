import { faChevronDown, faChevronUp, faSlidersH, faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import CardProduct from '../../Component/CardProduct'
import './CardProduct.css'
import './SortProduct.css'
import { Collapse } from 'reactstrap';
import Axios from 'axios'
import { ApiUrl } from '../../Constant/ApiUrl'


const ListProduct = () => {

    const [hap, setHap] = useState(0)
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
    const [inputFilter, setInputFilter] = useState({
        category : [],
        brands : [],
        rating : [],
        price : []
    })
    
    useEffect(() => {
        getAllProduct()
        getFilter()
    },[])

    const [cek, setCek] = useState([
        {
            name : 'Sayuran',
            id : 1
        },
        {
            name : 'Buah',
            id : 2
        },
        {
            name : 'Kacang-kacangan',
            id : 3
        }
    ])

    const onHandleCheckCategory = (e) => {
        let handle = filter.category
        let cat = inputFilter.category
        cat.push(e.target.value)
        setInputFilter({...inputFilter, category : cat})
        console.log(inputFilter)
        
        // handle.forEach(val => {
        //     if (val.category_name === e.target.value){
        //         val.isChecked = e.target.checked
        //         setInputFilter({...inputFilter, category : inputFilter.category + e.target.checked})
        //     }
        // })
        // setFilter({...filter, category : handle})
    }
    const onHandleCheckRating = (e) => {
        
        // let handle = rating
        // handle.forEach(val => {
        // if (val.name === e.target.value)
        //     val.isChecked =  e.target.checked
        // })
        // setRating(handle)
    }

   
    
    const getAllProduct = () => {
        Axios.get(ApiUrl + 'products')
        .then((res) => {
            try {
                if(res.data.error) throw new Error
                setData(res.data.allProduct)
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
    console.log(inputFilter)
    
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
                                filter.category && filter.category.map((val,index) => {
                                    return(
                                        <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                            <input 
                                            type="checkbox" 
                                            checked={val.isChecked}
                                            onClick={(e) => onHandleCheckCategory(e)}
                                            style={{width : 16, height : 16}}
                                            value={val.category_name}
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
                                filter.rating && filter.rating.map((val,index) => {
                                    return(
                                        <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                            <input 
                                            type="checkbox" 
                                            checked={val.isChecked}
                                            onClick={(e) => onHandleCheckRating(e)}
                                            style={{width : 16, height : 16}}
                                            value={val.name}
                                            />

                                            <span style={{marginLeft : 10}}>
                                            {
                                            Array.apply(null, {length: val.rating}).map(Number.call, Number).map((val) => {
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
                                    <input type='number' style={{width : 80, fontSize : 12}} />
                                </span>
                                <span>-</span>
                                <span>
                                    <p style={{fontSize : 14, marginBottom : 3}} for="formControlRange">Max-Price</p>
                                    <input type='number' style={{width : 80, fontSize : 12}} />
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
                                    filter.brands&& filter.brands.map((val,index) => {
                                        return(
                                            <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                                <input 
                                                type="checkbox" 
                                                checked={val.isChecked}
                                                onClick={(e) => onHandleCheckCategory(e)}
                                                style={{width : 16, height : 16}}
                                                value={val.name}
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
                                style={{width : 16, height : 16}}
                                value='Daily Sale'
                                />
                                <p style={{marginLeft : 10}}>Daily Sale</p>
                            </span>
                            <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                <input 
                                type="radio" 
                                style={{width : 16, height : 16}}
                                value='Flash Sale'
                                />
                                <p style={{marginLeft : 10}}>Flash Sale</p>
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