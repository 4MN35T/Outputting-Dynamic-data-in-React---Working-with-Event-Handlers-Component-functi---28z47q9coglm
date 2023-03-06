import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
const [name,setName]=useState(false);
const [inp,setInp]=useState(false);
function Myfunc(){
  setInp(name)
}
  return (
    <div id="main">
      <input id='input' onChange={(e)=>setName(e.target.value)}></input>
      <button id='button' onClick={Myfunc}>Click</button>
      <p id='text'> Hello my name is {inp?inp:"__"} and I study at Newton School</p>
    </div>
  )
}


export default App;