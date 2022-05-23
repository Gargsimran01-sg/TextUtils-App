import React, { useState } from 'react'

export default function TextForm(props) {

  function handleUpClick() {
    // everytime upeercase button is clicked this function is envoked
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text converted to Upper Case" , "success")
  }
  function handleloClick() {
    // everytime lowercase button is clicked this function is envoked
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text converted to Lower Case" , "success")
  }
  function handleClearClick() {
    let newText = "";
    setText(newText)
    props.showAlert("Text has been cleared" , "success")
  }


  function handleFindClick(){
    let word = prompt("enter the word you want to find")
    let wordFound = 0
            text.split(" ").forEach(element => {
              if(element === word){
               document.getElementById("wordCount").innerText = ++wordFound +  " match found";}
            });    
  }

  function handleCopy(){
    let copyText = document.getElementById("myBox")
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
    // once the text is copied get selection and remove will unselect the text
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied to clipboard" , "success")
  }

  function handleSpaces(){
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces have been removed from text" , "success")
  }
  // everytime we write something in textarea this event is fired and the value to text will be set to value of textarea
  // if we dont add this onchange we cant chnage the value inside the textare as its value is set to Text state
  // event is an object here
  // event.target gives us the element i.e textarea in this case and event.target.value will give us the value written inside it
  function handleOnChange(event) {
    setText(event.target.value)
  }
  // text is the state variable and setText is the function to chnage text
  const [text, setText] = useState("enter text here")
  // text = "hello" --  wrong way to change text
  // setText("hello") --  right way to chnage the text

  return (
    <>
    
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10" value={text} onChange={handleOnChange}></textarea>
        </div> 
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleFindClick}>Find</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>

        <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
        
      </div> 
      <div className='container mt-5'>
        <h2>Your text summary</h2>
          {/* here .filter is added to ensure that space is not considered as a new word filter will take a function in this case an arrow function that will take element of the array formed from text.split and if the length of array is 0 then this will not be in included in array thus words*/}

          {/* using below method only word after space is counted and not the word on pressing of enter is counted */}
        {/* <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length }</b> words and <b>{text.length}</b> characters</p>
        <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes reading time</p> */}



{/* use this method because it makes sure that if we press enter and than type a word the word is counted */}
{/* we used regex below i.e regular expression to split text if any whitespace occur be it enter or space */}
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes reading time</p>
        {/* split will form an array of characters separated by space and .length will return the length of array hence no. of words */}
      </div>
      <div className='container mt-5'>
        <h2>Found</h2>
        <p><b id = "wordCount">click on find button to know the word count</b></p>
      </div>
    </>
  )
}