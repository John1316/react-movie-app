import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Tv from './Tv/Tv';
import People from './People/People';
import Login from './Login/Login';
import Register from './Register/Register';
import Notfound from './Notfound/Notfound';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import Profile from './profile/Profile';
export default function App() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if(localStorage.getItem('token') != null){
      saveUserData();
    }
  }, [])
  
  function saveUserData(){
    let getToken = localStorage.getItem('token');
    let decodedToken = jwtDecode(getToken)
    setUserData(decodedToken)
    console.log(decodedToken);
  }
  let routes = createBrowserRouter([
      {path:'/' , element:<Layout setUserData={setUserData} userData={userData}/> , children:[
          {path:'home', element:<Home/>},
          {path:'movies', element:<Movies/>},
          {path:'tv', element:<Tv/>},
          {path:'people', element :<People/>},
          {path:'profile', element :<Profile userData={userData}/>},
          {path:'login', element:<Login  saveUsersData={saveUserData}/> },
          {path:'register', element:<Register/>},
          {path:'*', element:<Notfound/>},
      ]}
  ])
  return <RouterProvider router={routes} />
}

