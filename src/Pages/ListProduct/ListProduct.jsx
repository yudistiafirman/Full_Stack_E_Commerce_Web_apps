import { faChevronDown, faChevronUp, faSlidersH, faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import CardProduct from '../../Component/CardProduct'
import './CardProduct.css'
import './SortProduct.css'
import { Collapse } from 'reactstrap';


const ListProduct = () => {

    const [isOpen, setIsOpen] = useState({
        child_1 : false,
        child_2 : false
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
        console.log(cek)
    }
    const onHandleCheckRating = (e) => {
        
        let handle = rating
        handle.forEach(val => {
        if (val.name === e.target.value)
            val.isChecked =  e.target.checked
        })
        setRating(handle)
        console.log(rating)
    }

    
    return (
        <div className='container mt-5'>
            <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginBottom : 60}}>
                <img 
                style={{width : '100%', height : 250, objectFit : 'cover'}}
                src='https://images.unsplash.com/photo-1513617332477-a365e97b52a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80' />
            </div>
            <div>
                <span>
                    Home
                </span>
                <span>
                    Home
                </span>
            </div>
            <div className='row'>
                <div className='col-md-3' style={{paddingRight : 30, paddingTop : 5}} >
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
                        <div onClick={() => setIsOpen({...isOpen, child_2 : !isOpen.child_2})} style={{display : 'flex',  alignItems : 'center', justifyContent : 'space-between'}} >
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
                    
                </div>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                
            </div>
        </div>
    )
}

export default ListProduct
