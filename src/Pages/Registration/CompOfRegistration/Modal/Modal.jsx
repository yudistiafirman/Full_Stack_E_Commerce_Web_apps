import React, { useState } from 'react'
import './Modal.css'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import{faTimesCircle}from '@fortawesome/free-regular-svg-icons'
import {faTimes}from '@fortawesome/free-solid-svg-icons'
import FhBtnSolid from '../MyButton/button'
import Axios from 'axios'
import FhLoading from '../Loading/Loading'


const Modal =({open,onClickModal,message,errormessage})=>{


    const [code,setCode]=useState({
        code_1:'',
        code_2:'',
        code_3:'',
        code_4:'',
        error:'',
        data:'',
        loading:false
    })

    const {code_1,code_2,code_3,code_4,error,loading,data}=code

    const onHandlecode=text=>e=>{
        setCode({...code,[text]:e.target.value})
    }
    const onSubmitCode = ()=>{
     
            const code = code_1.concat(code_2).concat(code_3).concat(code_4)
            setCode({...code,loading:true})
         Axios.post('http://localhost:2000/auth/verifycode',{code:code,id:2}).then((response)=>{
          
            setCode({...code,data:response.data.message,code_1:"",code_2:'',code_3:'',code_4:''})
       
         })
           .catch((error)=>{
            console.log(error.response.data.message)
            setCode({...code,error:error.response.data.message,loading:false,code_1:'',code_2:'',code_3:'',code_4:''})
           })
          
          
    
        }
       
if(data){
    return<div className="reg-modal-silhouttee">
    <div className="reg-modal-container">
    
    <div className="modal-image-container">
    <img className="modal-image" src='https://www.static-src.com/frontend/member/static/img/success-pnv.1453c0c.png'/>
    <p className="success-modal-title">No hape anda telah kami verifikasi</p>
        <FhBtnSolid label="kembali" onSubmit={()=>window.location='http://localhost:3000'}/>
</div>

</div>
    </div>   
    
}
       

      
     
    return <div className={open?"reg-modal-silhouttee":'display-none'}>
   
                    <div className="reg-modal-container">
                      
                               
                    <FontAwesomeIcon onClick={onClickModal} className="mod-icon" style={{width:'20px',height:'20px',cursor:'pointer'}} icon={faTimes}/>

                        <div className="reg-modal-content">
                            <p className="reg-modal-title">Masukan Kode Verifikasi </p>
                            <p className="reg-modal-advice">{message}</p>
                            <p className="reg-modal-advice">Demi keamananmu jangan berikan kodenya ke siapapun</p>

                            <form action="">
                                <input onChange={onHandlecode('code_1')} maxLength={1} value={code_1} type="text" required/>
                                <input onChange={onHandlecode('code_2')} maxLength={1} value={code_2} type="text" required/>
                                <input onChange={onHandlecode('code_3')} maxLength={1} value={code_3} type="text" required/>
                                <input onChange={onHandlecode('code_4')} maxLength={1} value={code_4} type="text" required/>
                               
                            </form>
                  
                            <div style={{textAlign:'right',marginTop:'20px'}}><FhBtnSolid  onSubmit={onSubmitCode} disabled={code_1 && code_2 && code_3 && code_4?false:true} label={loading?<FhLoading/>:'submit'}/></div>
                        
            {

                   error && <div className="modal-error">
                    <p className="error-message">{error}</p>       
                    </div>
               }

                        </div>
                
                    </div>
            </div>
}

export default Modal