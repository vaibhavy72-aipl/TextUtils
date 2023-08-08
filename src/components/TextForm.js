import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "warning");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "danger");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "primary");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`m-2 text-${props.mode === 'light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#212529':'white', color : props.mode === 'light'?'#212529':'white'} } />
        </div>
        <div className="row col-md-12 ">
          <div className="row col-md-8 p-4">
            <button className="btn btn-success m-2 col-md-5" onClick={handleUpClick}>
              Convert to Uppercase
            </button>
            <button className="btn btn-success m-2 col-md-5" onClick={handleLowClick}>
              Convert to Lowercase
            </button>
            <button className="btn btn-warning m-2 col-md-5" onClick={handleCopy}>
              Copy the Text
            </button>
            <button className="btn btn-warning m-2 col-md-5" onClick={handleExtraSpaces}>
              Remove Extra Spaces
            </button>
            <button className="btn btn-danger m-2 col-md-5" onClick={handleClearClick}>
              Clear Textbox
            </button>
          </div>

          <div className={`text-${props.mode === 'light'?'dark':'light'} container my-3 col-md-4`}>
          <div className={`card bg-${props.mode === 'dark'?'secondary':'light'} `}>
            <div className="card-header">
              <h2>Your text summary</h2>
            </div>
            <div className="card-body">
              <p>{text.trim().length?text.trim().split(/\s+/).length:0}  words</p>
              <p>{text.length} characters</p>
              <p>{text.trim().length?0.008 * text.trim().split(/\s+/).length:0} Minutes read</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
