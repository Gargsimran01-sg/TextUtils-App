import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  function showAlert(message,type){
   setAlert({
     msg:message,
     type:type
   })
   setTimeout(() => {
     setAlert(null)
   }, 1200);
  }
function toggleMode(){
  if(mode==="light"){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
    setMode("dark")
    showAlert("Dark mode enabled" ,"success")
  }
  else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"
    setMode("light")
    showAlert("Light mode enabled" ,"success")
  }
}
  return (
  <>  
  <Router basename={process.env.PUBLIC_URL}>
  <Navbar title="Text Finder" about ="About" mode={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3' >
        <Routes>
        <Route path="/" element={<TextForm heading="Enter the text below to analyse"  mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About  mode={mode}/>} />
        </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;