import { useState,useEffect, useCallback,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (charAllowed) {
      str = str + "!@#$%^&*(){}[]?><.,";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1) ;
      
      
      pass = pass+str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);


  const copyToClipBoard=useCallback(()=>{

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])

 useEffect(()=>{
  passwordGenerator();
 },[length,numberAllowed,charAllowed,passwordGenerator])

 

  return (
    <>
      <div className="cont">
        <h1 className="pGen">Password Genretaor</h1>
        <div className="div1">
          <div className="btnDiv">
            <input
              id="passBtn"
              type="text"
              value={password}
              placeholder="Password"
              ref={passwordRef}
              readOnly
            />
            <button onClick={copyToClipBoard} id="copyBtn">Copy</button>
          </div>
        </div>
        <div className="div2">
          <div>
            <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="range1"
            
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
          </div>
          
          <div>
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>

          </div>
          <div>
               <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
          </div>

         
        </div>
      </div>
    </>
  );
}

export default App;
