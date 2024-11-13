import './App.css';
import logo from './img/ct logo.png'
import pdfFile from './Karnika_AIOS_Info.pdf';
import React, { useState } from 'react';
function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
     <div className='Block'>
      <div className='nav'>
      <h3 className='heading'><img src={logo}/></h3>
      <h3 className='nav-item contact-us' onClick = {()=>{
         window.location.href = 'https://calendly.com/chhirolya/contact-us';
      }}>Contact Us</h3>
      <h3 className='nav-item karnika-ai' onClick={()=>{
         window.open(pdfFile, '_blank');
      }}>Karnika AI</h3>
      </div>
      <h1>Coming Soon</h1>
      <h5  className='title'>Chhirolya Technology - AI Research & Development</h5>
     </div>
  );
}

export default App;
