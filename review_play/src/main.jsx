import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Game from './pages/Game.jsx'
import Search from './pages/Search.jsx'
import Listgames from './pages/Listgames.jsx'
import Mylist from './pages/Mylist.jsx'
import Login from './pages/login.jsx'
import Cadastro from './pages/Cadastro.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='game/:id' element={<Game />}/>
          <Route path='search' element={<Search />}/>
          <Route path='listgames/:type' element={<Listgames />}/>
          <Route path='Mylist' element={<Mylist />}/>
          <Route path='Login' element={<Login />}/>
          <Route path='Login/Cadastro' element={<Cadastro />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
