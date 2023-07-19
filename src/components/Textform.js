/* eslint-disable no-use-before-define */

import React , {useState} from 'react';
//use state ko use kr sakhte

export default function Textform(props) {
//upper case

  const handleUpClick = () =>{
    // console.log("uppercase is clicked " + text);
    if(text === ""){
      props.showAlert("write something in the text area first", 'danger');
    }else{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", 'success');
    }
    //  setText('you have clicked on handle upclick');

  }
  //lower case
  const handleLowClick = () =>{
    // console.log("uppercase is clicked " + text);
    if(text === ""){
      props.showAlert("write something in the text area first", 'danger');
    }else{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", 'success');
    }
    //  setText('you have clicked on handle upclick');

  }
  //clear text
  const handleClearClick = () =>{
    // console.log("uppercase is clicked " + text);
    if(text === ""){
      props.showAlert("write something in the text area first", 'danger');
    }else{
    let newText = "";
    setText(newText);
    props.showAlert("text area cleared", 'success');
    }
    //  setText('you have clicked on handle upclick');

  }
  //capatilize text
  const handleCaptClick = () => {
    if(text === ""){
      props.showAlert("write something in the text area first", 'danger');
    }else{
      let words = text.split(" ");
      let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
        
      });
      let newText = capitalizedWords.join(" ");
      setText(newText);
      props.showAlert("first letter has been capitalized", 'success');
    }
    
  }
  
  //copy text
  const handleCopyClick = ()=>{
    if(text === ""){
      props.showAlert("write something in the text area first", 'danger');
    }else{
    var text = document.getElementById("myBox");
     text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text area copied", 'success');
    }
  }

  //remove spaces
  const handleSpaceClick = () =>{
    if(text === ""){
      props.showAlert("write something in the text area first", 'danger');
    }else{
    var newText = text.split(" ");
    setText(newText.join(""));
    props.showAlert("text has been combined", 'success');
    }
  }
  
  const handleOnChange = (event) =>{
    // console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  //text mein enter text here ka maal aata or settext mein jo hm update krte uss ki value aati
 //jahan jahan update krein ge hojaye ga
 //hooks without class aap use kr sakhte
 //text = 'new text'; //wrong way to change state
 //setText = ('new text'); //correct way
 return (
  
    <>
    <div className="container" style={{color: (props.mode === 'light' ? 'black': 'white')}}>
  <h1>{props.heading} </h1>
<div className="mb-3">
  {/* on change zaroori hota wrna likh ni paongi textarea mein*/ }
      <textarea className="form-control" value={text} style={{backgroundColor:(props.mode === 'light' ? 'grey': 'white'), color: (props.mode === 'light' ? 'white': 'black')}} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
</div>
<button className="btn btn-primary m-1" onClick={handleUpClick}> Convert to UpperCase</button>
<button className="btn btn-primary m-1" onClick={handleLowClick}> Convert to LowerCase</button>
<button className="btn btn-primary m-1" onClick={handleClearClick}> Clear Text</button>
<button className="btn btn-primary m-1" onClick={handleCaptClick}> Capatilize Text</button>
<button className="btn btn-primary m-1" onClick={handleCopyClick}> Copy Text</button>
<button className="btn btn-primary m-1" onClick={handleSpaceClick}> Remove Space Text</button>

</div>
<div className="container my-3 " style={{color: (props.mode === 'light' ? 'black': 'white')}}>
  <h2 >Your text summary</h2>
  <p> <strong>{text.split(" ").length-1} </strong> words and <strong> {text.length} </strong>characters</p>
  <p> <strong>{0.008 *( text.split(" ").length-1) } </strong> Minutes Read</p>
  <h2>Preview: </h2>
  <p>{(text.length>0 ? text: 'Enter something in text box above to preview it') }</p>
  </div> </>
  )
}
