import { useState } from "react";
import React from "react";
export default function TextForm(props) {
    const [text, setText] = useState(' ');
    const handleUpClick=()=>{
       // console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
//props.showAlert("The text was converted to uppercase","success");
    }
    const handleLowClick=()=>{
      //  console.log("Lowercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
        //props.showAlert("The text was converted to lowercase","success");
    }
    const handleOnChange=(event)=>{
      //  console.log("OnChange");
        setText(event.target.value);
    }
    const handleClearClick=()=>{
      let newText='';
      setText(newText);
     // props.showAlert("The text was cleared","success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
   //props.showAlert("The text was copied","success");
}
const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
 //props.showAlert("The extra spaces were removed","success");
}
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#160552'}}>
        <h1 className="mb-2">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#160552'}}id="mybox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn-primary2 mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button  disabled={text.length===0}className="btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text.</button>
      <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    <div className="container-my4"  style={{color:props.mode==='dark'?'white':'#160552'}}>
        <h1 className='mb-2'>Your text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and{text.length}characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}