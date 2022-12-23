import React from 'react'

export default function Profile({userData}) {
    return (
        <>
        <div className="">First Name : {userData.first_name}</div>
        <div className="">Last name : {userData.last_name}</div>
        <div className="">Email : {userData.email}</div>
        <div className="">Age : {userData.age}</div>
        </>
    // <div>Name : {userData.userData?.first_name}</div>
  )
}
