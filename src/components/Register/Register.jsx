import React, { useState } from 'react';
import style from './Register.module.css';
import axios from 'axios';


import joi from 'joi';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Register() {

  let[user,setuser]=useState({
    first_name:'',
    last_name:'',
    age:'',
    email:'',
    password:'',

  })
  let [errorlist,setErrorlist]=useState([]);
  let [errormsg,setErrormsg]=useState([]);
  let [loading,setLoading]=useState(false);
  const navigate =useNavigate();
  function gotologin(){
    let path='/Login';
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
gotologin();
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
      first_name:joi.string().required().min(3).max(20).alphanum(),
      last_name:joi.string().required().min(3).max(20).alphanum(),
      age:joi.number().required().min(20).max(60),
      email:joi.string().required().email({tlds:{allow:['com','net']}}),
      password:joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}$'))
    });
    return schema.validate(user,{abortEarly:false})
  }
  return (<>
  <div className='mt-5'>

    <h1 className={`${style['s']}`}>Registration Form</h1>
    {errorlist.map((error,index)=>
    <div key={index} className="alert alert-danger">{error.message}</div>
    )}
   <form onSubmit={submit}>
  <div className="mb-3 mt-3">
    <label htmlFor="first_name" className="form-label">First_name</label>
    <input onChange={getforvalue} type="text" className="form-control" id="first_name" name='first_name' />
    
  </div>
  <div className="mb-3">
    <label htmlFor="last_name" className="form-label">Last_name</label>
    <input onChange={getforvalue} type="text" className="form-control" id="lasst_name"  name='last_name' />
    
  </div>
  <div className="mb-3">
    <label htmlFor="age" className="form-label">Age</label>
    <input onChange={getforvalue}  type="number" className="form-control" id="age" name='age' />
    
  </div>
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

