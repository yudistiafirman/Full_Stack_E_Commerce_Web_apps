import React, { useState,useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getCookie, isAuth, signout, updateUser } from '../../Registration/Registration/helper/auth'
import './ProfileNav.css'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import FhLoading from '../../Registration/CompOfRegistration/Loading/Loading'
import Swal from 'sweetalert2'
import default_profile from '../../../Support/Images/default_picture.jpg'


const ProfileNav=()=>{

    const[index,setIndex]=useState(0)
    const [file,setFile]=useState({
        image:null,
        err_size:false,
        err_format:false,
        loading:false,
    })

    const[picture,setPicture]=useState('')

    const user_option=[
        {option:'Profile'},
        {option:'Cart'},
        {option:'WishList'},
        {option:'Logout'},
]
const files=useRef(null)
let history = useHistory()

const {image,err_size,err_format,loading}=file

useEffect(()=>{
    loadProfile()
},[isAuth()])

const loadProfile=()=>{

    const token = getCookie('token')
    Axios.get(`http://localhost:2000/auth/getuserinfo/${token}`).then((res)=>{
    updateUser(res,()=>{
                setPicture(res.data[0].avatar)
              
    })

    }).catch((err)=>{
        console.log(err)
    })
}
console.log(picture)
const onChangeImage=(e)=>{

    if(e.target.files[0]!==undefined){
        setFile({...file,loading:true})
        const imageUpload= e.target.files[0]
     
        if(imageUpload.size>1000000){
           setFile({...file,err_size:true,err_format:false})
        }else if (!(/\.(png|jpe?g)$/i.test(imageUpload.name)) ){
            setFile({...file,err_format:true,err_size:false})
        }else{
        
            setFile({...file,loading:false})
            setFile({...file,image:imageUpload,err_size:false,err_format:false})
            
        }
    }
}

const onSaveImage=(e)=>{
    e.preventDefault()
    const token = getCookie('token')
    let fd = new FormData()
    
    fd.append('image_1',image)
 
    Axios.patch(`http://localhost:2000/auth/updateimage/${token}`,fd).then((res)=>{

    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title:res.data.message,
      showConfirmButton: false,
      timer: 1500
    })      


    }).catch((err)=>{
            console.log(err)
    })
}
   
        




const profileNavigation=(idx,value)=>{
    let route = value.option.toLowerCase()
    setIndex(idx)
    if(route==='profile'){
        history.push('/profile')
    }else if(route==='logout'){
      signout()
    }else{
        history.push(`/profile/${route}`)
    }
}



       return <div className="profilenav-container">

           <div style={{display:'flex',flexWrap:'wrap'}}>
                    {
                        loading?
                        <div className="loading-container">
                           <FhLoading/>
                        </div>
                        
                        : 
                        <div>
                            <img src={image?URL.createObjectURL(image):picture?'http://localhost:2000/'+picture:default_profile } alt="#" style={{borderRadius:'100px',width:'100px',height:'100px'}}/>
                        <input onChange={onChangeImage} ref={files}  style={{display:'none'}} type="file" accept="image/*"/>
    
                            <div className="camera-circle">
                            <FontAwesomeIcon icon={faPlus}  color="#ffff" onClick={()=>files.current.click()}>click</FontAwesomeIcon>
                            </div>
                                {err_size&& <p style={{fontSize:'12px',color:'red'}}>Maximum size 1 mb</p>}
                                {err_format&&<p style={{fontSize:'12px',color:'red'}}>format :JPEG/PNG</p>}
                 
                                {image&&<button onClick={onSaveImage} style={{outline:'none'}} className="image-btn" >save</button>}
                        </div>
                       
                                
                    }
                   
                       
                        

                        </div>

                    <p>{isAuth().user_name}</p>
                 
                 <div className="user-member">
                 member since {moment(isAuth().created_at).format('LL')}
                 </div>
                 {
                     user_option.map((value,idx)=> {
                     return <div onClick={()=>profileNavigation(idx,value)} className={index===idx?"user-option active-option":'user-option'}><p>{value.option}</p></div>
                     })
                 }
        </div>
}


export default ProfileNav


          
                         
                  
                       
               
                   
                  
     
             
              
          
               
               
              