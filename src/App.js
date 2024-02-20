import {React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
// import Home from './Pages/Home';
import UserListe from './Components/UserListe';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import Private from './Routes/PrivateRoute';



function App() {
  const [isAuth, setIsAuth]= useState(false);
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route       path='/users/' element={<UserListe />} />
      <Route       path='/user/:id' element={<Profile />} />
      <Route       path='/login' element={<Login />} />
      <Route       path='/admin' element={<Admin />} />
      <Route       path='/' element={<Private  isAuth={isAuth}/>} />
      
      </Routes>
     
    </div>
  );
}

export default App;
