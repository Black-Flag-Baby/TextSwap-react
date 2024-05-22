import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
// import Alert from './components/Alert';





// babel compiles jsx 
function App() {


 //rect app

  return (
    <>
    
 <Navbar title="TextSwap" />
    {/* <Alert alert=" this is alert meassage "   /> */}
    <div className="container my-3" >
    <TextForm heading="Text converter-convert,word & charcter count" className="txt.primary"/>
    {/* <About/> */}
      </div>
    
    </>

    
  );
}

export default App;
