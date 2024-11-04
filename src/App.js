import React from 'react'
import Home from './frontend/pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './frontend/pages/AboutUs';
import Header from './frontend/shared/header/Header';
import ContactUs from './frontend/pages/ContactUs';
import Blog from './frontend/component/Blog';
import NotFound from './frontend/pages/NotFound';
import Campus from './frontend/pages/Campus';
import Faculty from './frontend/pages/Faculty';


const App = () => {
  return (
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>} /> {/* About Us Route */}
        <Route path="/insights" element={<Blog/>} /> 
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path='/campus' element={<Campus/>}/>
        <Route path="/faculty" element={<Faculty/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
