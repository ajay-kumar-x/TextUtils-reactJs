import React, { useState } from 'react'

export default function FormText(props) {

    const [text,setText] = useState("");
    const converToUpperCase = () =>{
        setText(text.toUpperCase());
      }
    const onChangeFun= (event)=>{
        setText(event.target.value)
       }
    const clearAllText = () =>{setText("")}

    const[count,setCount] = useState(0);
    const countFun=()=>{setCount(count+1)}

  



  return (
    <div className="container">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myTextArea" rows="8" value={text} onChange={onChangeFun} ></textarea>

        <button type="button" className="btn btn-primary my-2" onClick={converToUpperCase} >Conver To UpperCase</button>

       <button type="button" className='btn btn-danger mx-2' onClick={clearAllText}> Clear All</button>

       <h3>Your Summary</h3>
       <p>words: {text.trim().split(" ").length} <br/> character: {text.trim().length}</p>

        <button onClick={countFun}>{count} times clicked</button>
    </div>
  )

  

}
