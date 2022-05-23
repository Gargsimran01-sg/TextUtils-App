import React
// , { useState } 
 from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // let darkMode = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({ color: "black", backgroundColor: "white" });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode");
  //   }
  // };

  return (
    <div className="container" 
    // style={myStyle} style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}}
    >
      <h2 style={{ color:props.mode==='dark'?'white':'black'}}>About Us</h2>
      {/* <button className="btn btn-secondary my-2" 
      // onClick={darkMode} btnText = {btnText}
      >
      </button> */}
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              // style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor:props.mode==='dark'?'darkslategrey':'white' , color:props.mode==='dark'?'white':'black'}}
            >
              <b> About TextUtils</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{backgroundColor:props.mode==='dark'?'#000000c9':'white' , color:props.mode==='dark'?'white':'black'}}
          >
            <div className="accordion-body" 
            // style={myStyle}
            >
              <p>
                This, the standard version of our text analyser, shows you
                summary statistics about your text to help you understand its
                complexity and readability. It's perfect for use by students,
                translators, writers and anyone wanting to understand their text
                statistically.
              </p>
              <p>
                <strong>Total Word Count</strong>
              </p>
              <p>
                {" "}
                <strong> Number of Characters</strong>
              </p>
              <p>
                <strong>Find No. od times a word occured in text.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
            // to change color of button we applied a global css in index.css
              className="accordion-button collapsed"
              // style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor:props.mode==='dark'?'darkslategrey':'white' , color:props.mode==='dark'?'white':'black'}}
            >
              <b>Contact</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{backgroundColor:props.mode==='dark'?'#000000c9':'white' , color:props.mode==='dark'?'white':'black'}}
          >
            <div className="accordion-body" 
            // style={myStyle}
            >
              <p><b>Text Utils</b></p><p> Panipat, Haryana</p><p> pin Code:- 132103</p> <p>Email Address :- textutils@gmail.com , Phone :- +91-XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}