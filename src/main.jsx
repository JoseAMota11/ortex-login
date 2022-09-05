import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Register } from './components/Register';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Welcome />} />
          <Route path='home' element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
