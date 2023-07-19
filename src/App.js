/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState}from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
 import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert(
      {
        msg: message,
        type: type
      })
      //logic for set alert 
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }

  const toggleMode = () =>{
    if(mode ===  'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert('darkmode has been enabled', "success");
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('light mode has been enabled', "success");
  }
  }
  

   
  

  return (
    <>
      <Router>
    <Navbar title='Analyze Text' aboutText = 'About' mode= {mode} toggleMode ={toggleMode} />
    <Alert alert= {alert}/>
    <div className="container my-3">
   
    <Routes>
          <Route exact path="/about"  element ={<About></About>}/>
           <Route exact path="/" element= {  <Textform showAlert={showAlert} heading = "Enter the text to analyze " mode={mode} alert={alert}/>}/> 
        </Routes>
    </div> 
    </Router>
    </>
  );
}

export default App;
