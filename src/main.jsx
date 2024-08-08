import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from'react-router-dom'
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp'
import Shoe from './pages/Shoe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/logIn' element={<LogIn />} />
      <Route path='/product/:id' element={<Shoe />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
