import React from 'react'
import './ModalMask.css'
import {connect}from 'react-redux'

const ModalMask =({show})=>{
    return show.modalMask&&<div className="modal-mask">
   
    </div>
}
const mapStateToProps=(state)=>{
    return{show:state.modal}
}

export default connect(mapStateToProps)( ModalMask)