import { faChevronDown, faChevronUp, faSlidersH, faSquare, faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import CardProduct from '../../Component/CardProduct'
import './CardProduct.css'
import './SortProduct.css'
import { Collapse } from 'reactstrap';


const ListProduct = () => {

    const [hap, setHap] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return function (){
            window.removeEventListener('scroll', listenToScroll)
          };
    }, [])

    const [isOpen, setIsOpen] = useState({
        child_1 : false,
        child_2 : false,
        child_3 : false,
        child_4 : false,
        child_5 : false
    });
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

    const [rating, setRating] = useState([
        {
            id : 1,
            star : 1
        },
        {
            id : 2,
            star : 2
        },
        {
            id : 3,
            star : 3
        },
        {
            id : 4,
            star : 4
        },
        {
            id : 5,
            star : 5
        }
    ])

    const onHandleCheckCategory = (e) => {
        
        let handle = cek
        handle.forEach(val => {
        if (val.name === e.target.value)
            val.isChecked =  e.target.checked
        })
        setCek(handle)
    }
    const onHandleCheckRating = (e) => {
        
        let handle = rating
        handle.forEach(val => {
        if (val.name === e.target.value)
            val.isChecked =  e.target.checked
        })
        setRating(handle)
    }

    const listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        setHap(scrolled)
      }
    
    console.log(hap)
    
    
    
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
                                cek.map((val,index) => {
                                    return(
                                        <span style={{display : 'flex', alignItems : 'center', padding : 3}}>
                                            <input 
                                            type="checkbox" 
                                            checked={val.isChecked}
                                            onClick={(e) => onHandleCheckCategory(e)}
                                            style={{width : 16, height : 16}}
                                            value={val.name}
                                            />
                                            <p style={{marginLeft : 10}}>{val.name}</p>
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
                                rating.map((val,index) => {
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
                            <p>Colors</p>
                            <FontAwesomeIcon icon={isOpen.child_4 ? faChevronUp : faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <div style={{padding : 10}}>
                            <Collapse isOpen={isOpen.child_4}>                            
                                <div className='container-colors'>
                                    
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                    <span className='container-icon-colors'>
                                        <FontAwesomeIcon style={{}} icon={faSquare} className='category-icon' style={{color : 'red'}} />
                                    </span>
                                        
                                </div>
                            </Collapse>
                        </div>

                        <div>
                        <div className='border-top pt-2' onClick={() => setIsOpen({...isOpen, child_5 : !isOpen.child_5})} style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between'}} >
                            <p>Brands</p>
                            <FontAwesomeIcon icon={isOpen.child_5 ? faChevronUp : faChevronDown} style={{fontSize : 14}}/>
                        </div>
                        <div style={{padding : 10}}>
                        <Collapse isOpen={isOpen.child_5}>                            
                            {
                                rating.map((val,index) => {
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

                    </div>
                    
                    
                </div>
                <div className='col-md-9 row border'>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    

                </div>
                
            </div>
            
        </div>
    )
}

export default ListProduct
