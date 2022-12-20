import logo from './logo.svg';
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
let routes = createBrowserRouter([
    {path:'/' , element:<Layout/> , children:[
        {path:'home', element:<Home/>},
        {path:'movies', element:<Movies/>},
        {path:'tv', element:<Tv/>},
        {path:'people', element:<People/>},
        {path:'login', element:<Login/>},
        {path:'register', element:<Register/>},
        {path:'*', element:<Notfound/>},
    ]}
])
export default function App() {
  return <RouterProvider router={routes} />
}

