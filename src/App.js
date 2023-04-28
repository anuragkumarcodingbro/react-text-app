//import logo from './logo.svg';
//import './components/Navbar.js';
import './App.css'
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import About from './components/About.js';
import React from 'react';
import { useState } from 'react';
import{Routes,Route} from 'react-router-dom';




function App() {
  const[mode,setmode]=useState('light');
   const[alert,setalert]=useState(null);
   
   
   const showalert=(message,type)=>
   {
      setalert({
        msg:message,
        type:type
      })
      setTimeout(()=>setalert(null),2000);
   }
    const toggleMode=()=>
    {
      if(mode==='light')
      {
        setmode('dark');
       // backgroundColor:dark;
       document.body.style.backgroundColor='#042743';
       showalert("Dark mode has been enabled","success");
document.title="Text-Altifier-Home-dark mode";

      }
      else
      {
        setmode('light');
        document.body.style.backgroundColor='white';
        showalert("Light mode has been enabled","success");
        //document.title="Text-Altifier-Home-dark mode";
      }
    }
  return (
  <>
 <Navbar title="text utils"  mode={mode}   toggleMode={toggleMode}/>
 <div className='container' my-3>
  </div>
  <Alert  alert={alert} />
<Routes>
<Route exact path='/' element={<Textform  showalert={showalert} heading="enter the text to analyze" mode={mode}/>}/>
<Route exact path='/about' element={<About/>}/>
</Routes>
 </>
  );
}




export default App;
