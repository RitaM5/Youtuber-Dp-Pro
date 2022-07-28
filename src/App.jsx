import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About/About'
import Checkout from './Pages/Checkout/Checkout/Checkout/'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import Home from './Pages/Homes/Home/Home'
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound'
import Blogs from './Pages/Blogs/Blogs'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>  
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
