import React,{useState} from 'react'
//import App from '../App';

export default function Textform(props) {
   const handleonClick=()=>{
   // console.log("uppercase was clicked");
    let newtext=text.toUpperCase();

    setText(newtext);
    props.showalert(" Data is converted to Upper case","success");
   }
    const handleonClick1=()=>{
    let newtext=text.toLowerCase();

    setText(newtext)
    props.showalert(" Data is converted to Lower case","success");
   }
   const clearonClick1=()=>
   {  setText("")
    // props.showalert("your all things will get deleted","danger")
    props.showalert(" Data would get cleared","success");
   }
   const copyonClick1=()=>
   {
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("copied to clipboard !","success");
   }
   const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showalert(" extra spaces removed","success");

   }
  

   const handleonChange=(event)=>{
        
          //  console.log("uppercase was clicked")
            setText(event.target.value)
      

    }
    const[text,setText]=useState("");
    //console.log(useState);
    return (
      <>
    <div>
<div className='container'
style={{color: props.mode==='dark' ? 'white':'#042743'}}>
 <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange={handleonChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white'  , color:props.mode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
</div>

<button type="button" className="btn btn-primary btn-lg " onClick={handleonClick} >convet to uppercase</button> 
<button type="button" className="btn btn-primary btn-lg mx-2" onClick={handleonClick1}>convet to lowercase</button> 
<button type="button" className="btn btn-primary btn-lg mx-2" onClick={clearonClick1}>clear text</button> 
<button type="button" className="btn btn-primary btn-lg mx-2" onClick={copyonClick1}>copy on click</button> 
<button type="button" className="btn btn-primary btn-lg mx-2" onClick={ handleExtraSpaces}>removeExtraSpaces</button> 
    </div>
    </div>

    <div className='container' my-3   style={{color: props.mode==='dark' ? 'white':'#042743'}}>
      <h2>your text summary</h2>
     <p>{text.split(' ').length} and  {text.length}</p>
     <p>{0.008*text.split(' ').length}minutes read</p>
      <h2>preview</h2>
      <p>
       { text.length>0 ?text:"enter something to preview it here"}
      </p>
    </div>



    </>
  );
}
