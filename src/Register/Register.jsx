import axios, { Axios } from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Register() {
  let navigate = useNavigate();
  if(localStorage.getItem('token')){
    navigate('/')
  }
  const [errorList, setErrorList] = useState([]);
  const [isLoading, setisLoading] = useState(false)
  const [successMessage, setsuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    const [user, setUser] = useState({
        
        first_name:"",
        last_name:"",
        age: 0,
        email: "",
        password:"",
        
        
    })
    function getUserInfo(eventInfo){
        let userData = {...user}
        userData[eventInfo.target.name] = eventInfo.target?.value;
        setUser(userData)
    }
    async function submitData(){
      let {data} = await axios.post(`https://route-movies-api.vercel.app/signup`, user)
      if (data.message == 'success') {

        setsuccessMessage('success')
        setErrorMessage('')
        setisLoading(false)
        navigate('/login')
        setTimeout(() => {
        }, 1500);
      }else{

        setErrorMessage(data.errors.email.message)
        setsuccessMessage('')
        setisLoading(false)

      }
    }
    function onSubmitForm(event){
      event.preventDefault();
      
      let validation = registerForm();
      setisLoading(true)
      if(validation.error){
        setisLoading(false)
        setErrorList(validation.error.details)
      }else{
        submitData();
        setisLoading(false)

      }

    }
    function registerForm(){
      let schema = Joi.object({
        first_name: Joi.string().min(3).required(),
        last_name: Joi.string().min(3).required(),
        age: Joi.number().required(),
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
              <label htmlFor="first_name" className='my-2'>First name</label>
              <input onChange={getUserInfo} type="text" name="first_name" id="first_name" className="form-control myInput" placeholder="First name" />
              {errorList.filter((error) => error.context.label == 'first_name')[0]?.message.length ? <div className="alert alert-danger" role="alert">
                <strong>{errorList.filter((error) => error.context.label == 'first_name')[0]?.message}</strong>
              </div> : ''}
            </div>
            <div className="form-group">
              <label htmlFor="last_name" className='my-2'>Last name</label>
              <input onChange={getUserInfo} type="text" name="last_name" id="last_name" className="form-control myInput" placeholder="Last name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email" className='my-2'>Email</label>
              <input onChange={getUserInfo} type="email" name="email" id="email" className="form-control myInput" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label htmlFor="age" className='my-2'>Age</label>
              <input onChange={getUserInfo} type="number" name="age" id="age" className="form-control myInput" placeholder="Age"/>
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
