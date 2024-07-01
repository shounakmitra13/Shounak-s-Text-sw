import React from "react";
export default function About(props) {

    let myStyle={
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'#042743':'white',
      border:'2-px solid',
      borderColor:props.mode==='dark'?'white':'#042743'
    }

  return (
    <div>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                style={myStyle}
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
              <strong> Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              Helps analyze your text easily
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                A free to use tool that helps to analyze your text.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Works on any Browser
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
