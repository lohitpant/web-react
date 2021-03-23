import React, { useEffect, useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export default function App(){
  
  const [result, setResult]=useState(0);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])

  const doSum=()=>{
    let currentNum=document.querySelector('#num').value;
    if(currentNum){       
    setResult(parseInt(result)+parseInt(currentNum));
    document.querySelector('#num').value="";    
    }else{      
      toast("Please enter a number");
    }
    
  }
  const doClear=()=>{
    console.log("Result "+result)
    document.querySelector('#num').value='';
    document.querySelector('#result').value='';
    toast("Text Box Cleared");  
  }

  const doSub=()=>{
    let currentNum=document.querySelector('#num').value;
    if(result==0 && currentNum ){
    setResult(document.querySelector('#num').value);
    document.querySelector('#num').value="";
    return;
    }    
    if(currentNum){           
    setResult(parseInt(result)-parseInt(currentNum));
    document.querySelector('#num').value="";    
    }else{
      toast("Please enter a number");
    }
  }

  const doMul=()=>{
    let currentNum=document.querySelector('#num').value;
    if(result==0 && currentNum ){
    setResult(document.querySelector('#num').value);
    document.querySelector('#num').value="";
    return;
    }    
    if(currentNum){           
    setResult(parseInt(result)*parseInt(currentNum));
    document.querySelector('#num').value="";    
    }else{
      toast("Please enter a number");
    }
  }

  const doDiv=()=>{
    let currentNum=document.querySelector('#num').value;
    if(result==0 && currentNum ){
    setResult(document.querySelector('#num').value);
    document.querySelector('#num').value="";
    return;
    }    
    if(currentNum){           
    setResult(parseInt(result)/parseInt(currentNum));
    document.querySelector('#num').value="";    
    }else{
      toast("Please enter a number");
    }
  }

  const doSqrt=()=>{
    let currentNum=document.querySelector('#num').value;
    if(currentNum ){
      setResult(Math.sqrt(currentNum))
    }else{
      toast("Please enter a number");
    }
  }

  return(
    <div className="container">
      
      <h1 >Calculator</h1>      
      
      <input id="num" type="text" placeholder="Type number here" />
      &ensp;
      <input id="result" type="text" placeholder="See Result Here" value={result} readOnly /> 
         
      
      <div>      
      <button onClick={doSum} class="btn btn-outline-dark" title="Add" >+</button>
      &ensp;
      <button onClick={doSub} class="btn btn-outline-dark" title="Subtract" >-</button>
      &ensp;
      <button onClick={doMul} class="btn btn-outline-dark" title="Multiply" >*</button>
      &ensp;
      <button onClick={doDiv} class="btn btn-outline-dark" title="Divide" >/</button>
      &ensp;
      <button onClick={doSqrt} class="btn btn-outline-dark" title="SquareRoot" >Sqrt</button>
      &ensp;
      <button onClick={doClear} class="btn btn-dark" title="Clear All">Clear</button>
      </div>      
      
    </div>
  );
}