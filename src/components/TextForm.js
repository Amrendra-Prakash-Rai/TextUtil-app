import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpperCaseOnClick = () => {
    console.log("Uppercae was clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.alert("Text Converted to Upper Case","success");
  };
  const handleUpperOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerCaseOnClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.alert("Text Converted to Lower Case","success");
  };
  const handleClearOnClick = () => {
    setText("");
    props.alert("Text Cleared","success");
  };
  const handleCopyOnClick = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.alert("Text Copied to clipboard","success");
  };
  const handleExtraSpaces =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.alert("Extra Spaces Removed","success");
  }
  return (
    <>
      <div className="container" style={{
              color: props.mode === 'dark' ? 'white' : 'black'
            }}>
        <div className="mb-4">
          <h4 htmlFor="myBox" className="my-2 form-label">
            {props.heading}
          </h4>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            onChange={handleUpperOnChange}
          ></textarea>
        </div>
        <button disabled={text.length===0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpperCaseOnClick}
        >
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowerCaseOnClick}
        >
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearOnClick}>
          Clear Text
        </button> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyOnClick}>
          Copy Text
        </button>
        
      </div>
      <div className="container" style={{
              color: props.mode === 'dark' ? 'white' : 'black'
            }}>
        <h4 className="my-3">Your Text Summary</h4>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character
        </p>
        <p>Average {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes take to read</p>
        <h4>Preview Text</h4>
        <p>{text.length>0?text:"Enter text to Preview"}</p>
      </div>
    </>
  );
}
