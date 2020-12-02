import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';


const ModalToPayment = ({modalOpen}) => {

    return (
        <div>
        <Modal isOpen={modalOpen} centered>
            <ModalBody>
                <div className='p-5' style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
                <p style={{fontSize : 25, fontWeight : 800}}>Thankyou for purchasing!</p>
                <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_g3ki3g0v.json"
                style={{ height: '300px', width: '300px' }}
                >
                </Player>
                <p>Make a Payment for complete your order</p>
                <Link to='/member/transactions'>
                    <p style={{fontSize : 14, textDecoration : 'underline'}}>see all transaction</p>
                </Link>
                </div>
            </ModalBody>
        </Modal>
        </div>
    )
}

export default ModalToPayment
