import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext(null);

export default function AuthContextProvider(props) {
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
  
  return <AuthContext.Provider value={{userData, setUserData , saveUserData}}>
    {props.children}
  </AuthContext.Provider>
}
