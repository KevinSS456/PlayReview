import './App.css'
import {  Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  return (
    <div className='App'>
      <Navbar />
      < Outlet />
    </div>
    
  )
}

export default App
