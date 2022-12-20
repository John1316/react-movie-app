import React, { useState } from 'react'

export default function Register() {
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
        console.log( userData)
    }
  return (
    <>
        <form action="" method="post">

            <div className="form-group">
              <label htmlFor="first_name" className='my-2'>First name</label>
              <input onChange={getUserInfo} type="text" name="first_name" id="first_name" className="form-control myInput" placeholder="First name" />
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
            <button className="btn btn-success mt-2">Submit</button>
        </form>
    </>
  )
}
