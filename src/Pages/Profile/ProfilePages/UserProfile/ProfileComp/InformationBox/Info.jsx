import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Info.css'


const InfoBox =()=>{
    return  <div className="information-container">
    < FontAwesomeIcon icon={faInfoCircle} id="info-icon"/>
    <span>Apabila notifikasi WhatsApp tidak terkirim/tertunda/terjadi kesalahan, notifikasi akan dikirim melalui SMS secara otomatis.</span>
    </div>
}

export default InfoBox