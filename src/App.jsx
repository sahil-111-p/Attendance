// import React from "react";
// import "./App.css";
// import Card from "./components/Card";
// import Previous from "./components/Previous";
// import Navbar from "./components/Navbar";
// import { LoginPage } from "./components/LoginPage";

// const App = () => {
//   return (
//     <>
//       <LoginPage/>
//     </>
//   );
// };

// export default App;



import './App.css'
import TeacherInfo from './components/pages/user_side/TeacherInfo';
import { motion, AnimatePresence } from "framer-motion";
import AnimationPage from './components/pages/user_side/AnimationPage'
import React, { useEffect, useRef, useState } from 'react';
// import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import Qrcode from './components/pages/user_side/Qrcode'
import { Route, Routes, useLocation } from 'react-router-dom'
import Logout from './components/pages/user_side/Logout'
import Dashboad from './components/pages/user_side/Dashboad';
import { LoginPage } from './components/pages/user_side/LoginPage'


function App() {
  const location = useLocation();
  return (
    <>
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/Teacherinfo' element={<TeacherInfo/>}/>
      <Route path='/scanQR' element={<Qrcode/>} />
      <Route path='/' element={<TeacherInfo/>} />
      <Route path='/Complete' element={<AnimationPage/>} />
      <Route path='/ShowLogOut' element={<Logout/>} />
      <Route path='/Dashboard' element={<Dashboad/>} />
    </Routes>
    </AnimatePresence>
    </>
  );
}

export default App