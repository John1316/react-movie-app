import axios, { Axios } from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const [successMessage, setsuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    const [user, setUser] = useState({
        

        email: "",
        password:"",
        
        
    })
    function getUserInfo(eventInfo){
        let userData = {...user}
        userData[eventInfo.target.name] = eventInfo.target?.value;
        setUser(userData)
    }
    async function submitData(){
      let {data} = await axios.post(`https://route-movies-api.vercel.app/signin`, user)
      if (data.message == 'success') {

        setsuccessMessage('success')
        setErrorMessage('')
        localStorage.setItem('token', data.token)
        setisLoading(false)
        setTimeout(() => {
          navigate('/home')
        }, 1500);
      }else{

        setErrorMessage(data.message)
        setsuccessMessage('')
        setisLoading(false)

      }
    }
    function onSubmitForm(event){
      event.preventDefault();
      
      let validation = loginForm();
      setisLoading(true)
      if(validation.error){
        setisLoading(false)
        setErrorList(validation.error.details)
      }else{
        submitData();
      }

    }
    function loginForm(){
      let schema = Joi.object({
        email: Joi.string().required().email({minDomainSegments:2, tlds:{allow:['com', 'net']}}),
        password: Joi.string().min(6).required(),
      });
      return schema.validate(user );
    }
  return (
    <>
    {errorList.map((error, index) => <div key={index} className="alert alert-danger" >
        <strong>{error.message}</strong>
      </div>)}
    {isLoading == true ? <div className="loader">
    <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>: ''}
      {successMessage.length > 0 ? <div className="alert alert-success" >
        <strong>{successMessage}</strong>
      </div> : ''}
      {errorMessage.length > 0 ? <div className="alert alert-danger">
        <strong>{errorMessage}</strong>
      </div> : ''}

        <form onSubmit={onSubmitForm}>

            
            <div className="form-group">
              <label htmlFor="email" className='my-2'>Email</label>
              <input onChange={getUserInfo} type="email" name="email" id="email" className="form-control myInput" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password" className='my-2'>Password</label>
              <input onChange={getUserInfo} type="password" name="password" id="password" className="form-control myInput" placeholder="Password"/>
            </div>
            <button className="btn btn-success mt-2" >Submit</button>
        </form>
    </>
  )
}
