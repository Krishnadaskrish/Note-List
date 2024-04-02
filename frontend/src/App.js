
import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Register from './Componets/Register';
import Login from './Componets/LoginForm';
import AddNOte from './Componets/Noteadding';
import env from "react-dotenv";
import axios from 'axios';

export const Axios = axios.create({
  baseURL : "http://localhost:4000/user" ,
  headers: {
    "Content-Type":"application/json",
    Authorization:  `Bearer ${localStorage.getItem("jwt_token")}`,
  }

})


function App() {

 
  
  


  
  return (
    <>

    <Routes>
      <Route path = '/' element={<Register/>}/>
      <Route path = '/login' element={<Login/>}/>
      <Route path = '/Addnote' element={<AddNOte/>}/>





    </Routes>
    

    </>
  );
}

export default App;
