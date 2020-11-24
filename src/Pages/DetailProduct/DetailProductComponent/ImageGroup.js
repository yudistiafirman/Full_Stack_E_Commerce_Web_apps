import React from 'react'

export const ImageGroup = () => {
    return (
        <div style={{display : 'flex'}}>
            <div style={{display : 'flex', flexDirection : 'column', marginRight : 13}}>
                <span>
                    <img 
                    className='child-image'
                    src='https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' />
                </span>
                <span>
                    <img 
                    className='child-image'
                    src='https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' />
                </span>
                <span>
                    <img 
                    className='child-image'
                    src='https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' />
                </span>
                <span>
                    <img 
                    className='child-image'
                    src='https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' />
                </span>
            </div>
            <div style={{display : 'flex', flexDirection : 'column', alignItems : 'center'}} >
                <img 
                className='parent-image'
                src='https://dynamic.zacdn.com/9x-iHypJa1fN_TGRcsz562oR6SU=/fit-in/762x1100/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/quiksilver-3727-8123452-1.jpg' />
            </div>
        </div>
    )
}
