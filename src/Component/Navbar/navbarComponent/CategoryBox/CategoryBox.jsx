import React from 'react'
import TShirtIcon from './../../../../Support/Images/T-Shirt.png';
import PantsIcon from './../../../../Support/Images/Trousers.png';
import ShirtIcon from './../../../../Support/Images/Shirt.png';
import JacketIcon from './../../../../Support/Images/Jacket.png';
import ShoesIcon from './../../../../Support/Images/Shoes.png';
import HatIcon from './../../../../Support/Images/Hat.png';



const CategoryBox =({onMouseEnter,onMouseLeave})=>{
    return <div className="category-square" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <span className='icon-up'/>
        <div className="category-item">
                <img src={TShirtIcon} alt="#"/>
                <p>T-Shirt</p>
        </div>
        <div className="category-item">
                <img src={PantsIcon} alt="#"/>
                <p>Pants</p>
        </div>
        <div className="category-item">
                <img src={ShirtIcon} alt="#"/>
                <p>Shirt</p>
        </div>
        <div className="category-item">
                <img src={JacketIcon} alt="#"/>
                <p>Jacket</p>
        </div>
        <div className="category-item">
                <img src={ShoesIcon} alt="#"/>
                <p>Shoes</p>
        </div>
        <div className="category-item">
                <img src={HatIcon} alt="#"/>
                <p>Hat</p>
        </div>
    </div>
}


export default CategoryBox
