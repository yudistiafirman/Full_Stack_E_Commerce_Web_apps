import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faStar } from '@fortawesome/free-solid-svg-icons'
import flash from './../Support/Images/flash-without-border.png'
import MdHeart from 'react-ionicons/lib/MdHeart'
import MdStar from 'react-ionicons/lib/MdStar'

const CardProduct = () => {
    const [onHover, setOnhover] = useState(false)

    const [imageSlide, setImageSlide] = useState(true)
    const [colorHeart, setColorHeart] = useState(false)

    return (
        <div className='col-md-3 ' style={{height : 500, padding : 10, backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div className='card-container' onMouseEnter={() => {setOnhover(true)}} onMouseLeave={() => {setOnhover(false)}} >
                <div className=' container-image w-100' style={{padding : 10}} onMouseEnter={() => setImageSlide(false)} onMouseLeave={() => setImageSlide(true)}>
                    <img 
                    className='image-card fade-in'
                    src={imageSlide ? 'https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' : 'https://dynamic.zacdn.com/sVNGtZBV4nqK6j1nAV87tIY7YlI=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3730-8123452-3.jpg'}
                    />
                </div>
                <span style={{position : 'absolute',top : 25, left : 18,}}>
                    <img 
                    style={{height : 25, width : 25}}
                    src={flash} 
                    />
                </span>
                <span onMouseEnter={() => setColorHeart(true)} onMouseLeave={() => setColorHeart(false)} style={{position : 'absolute',bottom : 133, left : 25,}}>
                    <MdHeart shake={colorHeart}  style={{width : 25, height : 25}} onClick={() => setColorHeart(!colorHeart)} fontSize="60px" color={ colorHeart ? 'rgba(52,52,52,0.7)' : "#c44536" } />
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
                    <div style={{marginTop : 5}}>
                        <MdStar beat={colorHeart}  style={{width : 20, height : 20}} onClick={() => setColorHeart(!colorHeart)} fontSize="60px" color='orange' />
                        <MdStar beat={colorHeart}  style={{width : 20, height : 20}} onClick={() => setColorHeart(!colorHeart)} fontSize="60px" color='orange' />
                        <MdStar beat={colorHeart}  style={{width : 20, height : 20}} onClick={() => setColorHeart(!colorHeart)} fontSize="60px" color='orange' />
                        <MdStar beat={colorHeart}  style={{width : 20, height : 20}} onClick={() => setColorHeart(!colorHeart)} fontSize="60px" color='orange' />
                        <MdStar beat={colorHeart}  style={{width : 20, height : 20}} onClick={() => setColorHeart(!colorHeart)} fontSize="60px" color='orange' />
                            
                    </div>
                </div>
                {/* <div className='button-container'>
                    <div className='a-button' style={onHover ? {display : 'block'} : {display : 'none'}}>
                        <div className='a-button-inner'>
                            <p className='a-button-text'>Add to Cart</p>
                        </div>
                    </div>
                </div> */}
                <div className='choice-varian-container'>
                    <div>
                        <FontAwesomeIcon icon={faSquare} className='icon-varian' style={{color : 'red'}} />
                        <FontAwesomeIcon icon={faSquare} className='icon-varian' style={{color : 'black'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
