import React, { Component, useEffect, useState } from 'react';

import { connect } from 'react-redux';
import './UserProfile.css'
import { ValidateEmail, ValidateUsername } from '../../../Registration/Registration/helper/validator';

import Mybutton from '../../../../Pages/Registration/CompOfRegistration/MyButton/button'
import ProfileInput from './ProfileComp/ProfInput/ProfInput';
import ProfInputDis from './ProfileComp/ProfInput/ProfileInputDis';
import RadioInput from './ProfileComp/RadioInput/RadioInput';
import InfoBox from './ProfileComp/InformationBox/Info';
import DateButton from './ProfileComp/DateButton/DateButton';
import moment from 'moment'
import { isAuth } from '../../../Registration/Registration/helper/auth';
import { useHistory } from 'react-router-dom';




const Profile=()=>{
            const [username,setUsername]=useState({
                name:isAuth().user_name,
                blur:false
            })
            const [useremail,setUsermail]=useState({
                email:isAuth().email,
                error:false
            })

            const [notif,setNotif]=useState({
                sms:true,
                watsap:false
            })
            const [gender,setGender]=useState({
                female:true,
                male:false,
            })

            const [day,setDay]=useState({
                dayValue:null,
                showDay:false
            })
            const [month,setMonth]=useState({
                monthValue:null,
                showMonth:false
            })
            const [year,setYear]=useState({
                yearValue:null,
                showYear:false
            })
            const [validDate,setValidDate]=useState('')
            let history=useHistory()
            const {sms,watsap}=notif
            const {female,male}=gender
            const {name,blur}=username
            const {email,error}=useremail
            const {dayValue,showDay}=day
            const {monthValue,showMonth}=month
            const {yearValue,showYear}=year
       
            const months=['january','february','march','april','may','june','july','august','september','october','november','december']

            const onCheckEmail=()=>{
                if(ValidateEmail(name) || !ValidateUsername(name)){
                    setUsername({...username,blur:true})
                }else{
                    setUsername({...username,blur:false})
                }
            }

            const onValidEmail=()=>{
                if(!ValidateEmail(email)||email.length===0){
                    setUsermail({...useremail,error:true})
                }else{
                    setUsermail({...useremail,error:false})
                }
            }
      const dayGenerator=()=>{
          const arrayDay=[]

          for(var i =1;i<=31;i++){
          arrayDay.push(i)
          }
          return arrayDay
      }

      const yearGenerator=()=>{
          var currYear = new Date().getFullYear()
          var arrayYear=[]
          for (var i=currYear;i>=1950;i--){
          arrayYear.push(i)
          }

          return arrayYear
        
      }

      
      useEffect(()=>{
        if(yearValue&&monthValue&&yearValue){
        

                let currYear = new Date().getFullYear()
                const dob = moment(`${yearValue}-0${months.indexOf(monthValue) +1}-${dayValue}`)
                if(currYear-yearValue<11){
                    setValidDate('you are underage.')
                }else if(!dob.isValid()){
                    setValidDate('invalid date format.')
                }else{
                    setValidDate('')
                }
            }
      
          },[dayValue,monthValue,yearValue])
                
             
         
           
       

        return(
            // PROFILE
            <div className="user-profile-container">
                    <p className="profile-title">Profile</p>
               
                    <form action="">
                      <ProfileInput defaultValue={name} label="username" onChange={(e)=>setUsername({...username,name:e.target.value})} onBlur={onCheckEmail} blur={blur}/>
                      <ProfInputDis label="Email" defaultValue={email}/>
                      <ProfInputDis onClick={()=>history.push('/e')} defaultValue="********" label="password" sideLabel="Change"/>
                      <ProfInputDis  defaultValue="08122089655" label="phone-number" sideLabel="Change" isPhone/>

                    <p className="notif-title">Notifications</p>
                    
                    <div className="notification-choice">
                    <RadioInput label="SMS" click={sms} onClick={()=>setNotif({...notif,sms:true,watsap:false})} />
                    <RadioInput label="Watsap" click={watsap} onClick={()=>setNotif({...notif,sms:false,watsap:true})} />
                    </div>
                   

                   <p className="notif-title">Date Of Birth</p>
                 
                  <div className="dob-container">
                    <DateButton dmy={dayValue} onClick={(e)=>{
                        e.preventDefault()
                        setDay({...day,showDay:!showDay})}} type="Day" clicked={showDay} />
                    <DateButton dmy={monthValue} type="Month" clicked={showMonth} onClick={(e)=>{
                        e.preventDefault()
                        setMonth({...month,showMonth:!showMonth})
                    }} />
                    <DateButton dmy={yearValue} type="Year" clicked={showYear} onClick={(e)=>{
                        e.preventDefault()
                        setYear({...year,showYear:!showYear})
                    }} />
                  </div>

                  <p className="notif-title">Gender</p>
                 
                  <div className="notification-choice">
                  <RadioInput label="Female" click={female} onClick={()=>setGender({...gender,female:true,male:false})}/>
                  <RadioInput label="Male" click={male} onClick={()=>setGender({...gender,female:false,male:true})}/>     
                  </div>
                  
                  <ProfileInput label="Email" onChange={(e)=>setUsermail({useremail,email:e.target.value})} blur={error} onBlur={onValidEmail} value={email} required/>
                  <Mybutton label="Save"/>
                 </form>



                {
                    showDay&&<div className="dropdown-container" style={{bottom:'-14%',left: '2.5%'}}>
                        {
                            dayGenerator().map((el,idx)=>{
                                return <div id="day-generator" onClick={(e)=>{
                                    e.preventDefault()
                                    setDay({...day,dayValue:el,showDay:false})
                                }} >{el}</div>
                            })
                        }
                    </div>
                }
                
                 {
                   showMonth&& <div className="dropdown-container" style={{bottom:'-14%',left:'18%'}}>
                        {months.map((value,index)=>{
                            return <div  onClick={(e)=>{                               
                               e.preventDefault()
                            setMonth({...month,monthValue:value,showMonth:false})
                        }} id="day-generator">{value}</div>
                        })}
                    </div>
                 }  
                
                {
                    showYear&&<div className="dropdown-container" style={{bottom:'-14%',left:'34%'}}>
                        {yearGenerator().map((v,i)=>{
                            return <div id="day-generator" onClick={(e)=>{
                                e.preventDefault()
                                setYear({...year,yearValue:v,showYear:false})
                            }}>{v}</div>
                        })}
                    </div>
                }
          
                {
                    blur?<span className="error-message">{!ValidateUsername(name)?'minimum 6 character for name.':ValidateEmail(name)?'invalid format for name.':null}</span>:null
                }
                  {
                    error?<span className="error-email">{email.length===0?'form cannot be empty':!ValidateEmail(email)?'invalid format email.':null}</span>:null
                }
                {
                    validDate?<span className="error-date">{validDate}</span>:null
                }
                {
                    watsap&&<div className="information-box">     <InfoBox/> </div>
                }  
                

       
                   
            </div>
        )
    }


const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}
            
export default connect(mapStateToProps, null)(Profile)


                

                              
                                
                              


                 
                
