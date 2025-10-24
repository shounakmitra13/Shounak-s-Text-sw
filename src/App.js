import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("The text was converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("The text was converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText('');
    // props.showAlert("The text was cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // props.showAlert("The text was copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(' ');
    setText(newText);
    // props.showAlert("The extra spaces were removed", "success");
  };

  const handlePascalCase = () => {
    const newText = text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    setText(newText);
}
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#160552' }}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : '#160552'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
       <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handlePascalCase}>
        Convert to pascal Case  
        </button>
      </div>

      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#160552' }}>
        <h1 className="mb-2">Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter(element => element.length !== 0).length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter(element => element.length !== 0).length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("The text was converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("The text was converted to lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText('');
    // props.showAlert("The text was cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // props.showAlert("The text was copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(' ');
    setText(newText);
    // props.showAlert("The extra spaces were removed", "success");
  };

  const handlePascalCase = () => {
    const newText = text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    setText(newText);
}
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#160552' }}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : '#160552'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button onClick={handlePascalCase} className="btn btn-light mx-1 my-1">
    Convert to Pascal Case
</button>
      </div>

      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#160552' }}>
        <h1 className="mb-2">Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter(element => element.length !== 0).length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter(element => element.length !== 0).length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
