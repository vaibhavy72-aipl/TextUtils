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
    let Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
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
      <div className={`mx-2 text-${props.mode === 'light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#212529':'white', color : props.mode === 'light'?'#212529':'white'} } />
        </div>
        <button className="btn btn-primary mr-2" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-warning mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div  className={`mx-2 text-${props.mode === 'light'?'dark':'light'} container my-3`}>
        <h2>Your text summary</h2>
        <p>{text.trim().length?text.trim().split(' ').length:0}  words, {text.length} characters</p>
        <p>{text.trim().length?0.008 * text.trim().split(" ").length:0} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
      </div>
    </>
  );
}
