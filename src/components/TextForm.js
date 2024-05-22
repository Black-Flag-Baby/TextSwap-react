import { useState } from "react"
import React  from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");


    const handleupclick = ()=>{
        console.log("uppercase was clicked"+ text);
        let newText =text.toUpperCase();
        setText(newText);
    }

    const handleloclick = ()=>{
        console.log("lowercase was clicked"+ text);
        let newText =text.toLowerCase();
        setText(newText);
    }
    


    const handleOnchange = (event)=>{
        console.log("on change");
            setText(event.target.value)

    


    }
            
       
  return (
    <>
    
   <div className="container mx-5 my-lg-4" >
   <h1>{props.heading}</h1>

    <textarea className="form-control"  value={text} onChange={handleOnchange} id="myBox" rows="4"></textarea>
    <button className="btn btn-primary my-5 mx-2" onClick={handleupclick} >convert to Uppercase</button>
    <button className="btn btn-primary my-4 " onClick={handleloclick}> convert to lowercsecase</button>

  </div>
  <div className="container mx-5 my-lg-4">
    <h1>Words Summary</h1>
    <p>{text.split(" ").filter((element=>{return element.length!=0})).length} words and {text.length} characters</p>
    <p>{0.08 * text.split(" ").length} minutes read </p>
  </div>
  </>
  )
}