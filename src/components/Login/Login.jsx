import React, { useState } from 'react';
import style from './login.module.css';
import axios from 'axios';


import joi from 'joi';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {

  let[user,setuser]=useState({
    
    email:'',
    password:'',

  })
  let [errorlist,setErrorlist]=useState([]);
  let [errormsg,setErrormsg]=useState([]);
  let [loading,setLoading]=useState(false);
  const navigate =useNavigate();
  function gotohome(){
    let path='/Home';
    navigate(path);
  }
  async function submit(e){
    e.preventDefault();
    setLoading(true);
    let validateerror=validateform();
   
    console.log(validateerror);
    if(validateerror.error){
      setErrorlist(validateerror.error.details);
      alert(validateerror.error.details)
      setLoading(false);
    }
    else{
      let {data}= await axios.post('',user);
      if(data.message=='success'){
gotohome();
      }
      else{
        setErrormsg(data.message)
      }
      
      setLoading(false);
    }
   
  }
  function getforvalue(e){
let myuser={...user};
myuser[e.target.name]=e.target.value;
setuser(myuser);


  }
  function validateform(){
    const schema =joi.object({
      
      email:joi.string().required().email({tlds:{allow:['com','net']}}),
      password:joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$'))
    });
    return schema.validate(user,{abortEarly:false})
  }
  return (<>
  <div className='mt-5'>

    <h1 className={`${style['s']}`}>LogIn Form</h1>
    {errorlist.map((error,index)=>
    <div key={index} className="alert alert-danger">{error.message}</div>
    )}
   <form onSubmit={submit}>
  
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input onChange={getforvalue} type="email" className="form-control" id="email" name='email'  />
    
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={getforvalue} type="password" className="form-control" id="exampleInputPassword1"name='password' />
  </div>
  
  <button type="submit" className="btn btn-primary float-end">
    {loading?<i className='fa fa-spinner fa-spin'></i>:'register'}</button>
  <div className="clrfix "></div>
</form></div></>

  )
}
