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
import { useContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import Profile from './profile/Profile';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import ItemDetails from './ItemDetails/ItemDetails';
import { Offline } from 'react-detect-offline';
import { AuthContext } from './MediaContext/AuthContext';
export default function App() {
let {userData, setUserData , saveUserData} = useContext(AuthContext);
  let routes = createBrowserRouter([
      {path:'/' , element:<Layout setUserData={setUserData} userData={userData}/> , children:[
          {index:true, element:<ProtectedRoute userData={userData}> <Home/></ProtectedRoute>},
          {path:'movies', element:<ProtectedRoute userData={userData}><Movies/></ProtectedRoute>},
          {path:'tv', element:<ProtectedRoute userData={userData}><Tv userData={userData}/></ProtectedRoute>},
          {path:'people', element :<ProtectedRoute userData={userData}><People/></ProtectedRoute>},
          {path:'profile', element :<ProtectedRoute userData={userData}><Profile userData={userData}/></ProtectedRoute>},
          {path:'itemDetails/:id/:media_type', element :<ProtectedRoute userData={userData}><ItemDetails /></ProtectedRoute>},
          {path:'login', element:<Login  saveUsersData={saveUserData}/>},
          {path:'register', element:<Register/>},
          {path:'*', element:<Notfound/>},
      ]}
  ])
  return<>
    {/* <Online>Only shown when you're online</Online> */}
    <Offline>
      <div className="offline">
        Your are offline 
      </div>
    </Offline>
        <RouterProvider router={routes} />
  </> 
}

