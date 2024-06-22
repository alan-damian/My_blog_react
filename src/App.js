
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useState,useEffect } from 'react';

import Home from "./views/Home";
import Crear from "./views/Crear";
import Posteos from  "./views/Posteos";
import PosteosId from "./views/Posteosid";
import Error404 from "./views/Error404";

import Login from './views/Login';
import Logout from "./views/Logout";


import RutaProtected from "./routes/RutaProtected"
import RutaProtectedRedirect from "./routes/RutaProtectedRedirect"

import { AuthContext, initAutenticacion, initUser } from './context/AuthContext';


import AxiosGet from "./components/AxiosGet"
import AxiosPost from "./components/AxiosPost"

function App() {

  const [auth, setAuth] = useState(initAutenticacion());
  const [userName, setUserName] = useState(initUser());

  return (

    <div className="App">
      


      <AuthContext.Provider value={{ auth, setAuth, userName, setUserName }}>
        
        <HashRouter>
          <div className="navbar-container">
            <Navbar auth={auth}/>
          </div>

          

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/logout" element={<Logout />}/>


            <Route path='/' element={<RutaProtected />}>    
                
              <Route path="/login" element={<Login />}/>
              <Route path="/crear" element={<Crear />}/>
              <Route path="/posteos" element={<Posteos />}/>

              <Route path="/posteos/:id" element={<PosteosId />}/> 
              
            </Route>
            
              <Route path="*" element={<Error404 />}/>
                
          </Routes>


        </HashRouter>

      </AuthContext.Provider>

    </div> 
  );
}

export default App;
