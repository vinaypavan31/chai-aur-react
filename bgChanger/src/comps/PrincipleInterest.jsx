import React from "react";
import { useState } from "react";

const PrincipleInterest = () => {
  const [principle, setPrinciple] = useState();
  const [time, setTime] = useState();
  const [rate, setRate] = useState();

  const [interest, setInterest] = useState();

  const principleHandler = (e) => {
    setPrinciple(e.target.value);
  };
  const timeHandler = (e) => {
    setTime(e.target.value);
  };

  const rateHandler = (e) => {
    setRate(e.target.value);
  };

  

  const calInt=()=>{
    const result=(principle*time*rate)/100;
    setInterest(result);
  }

  return (
    <div>
      <div>
        
          <label htmlFor="principle">Principle Amount</label>
          <br />
          <input
            type="number"
            id="principle"
            value={principle}
            onChange={principleHandler}
          />
          <br />
          <label htmlFor="time">Time Period</label>
          <br />
          <input type="number" id="time" value={time} onChange={timeHandler} />
          <br />
          <label htmlFor="rate">Rate of Interest</label>
          <br />
          <input type="number" id="rate" value={rate} onChange={rateHandler} />
          <br />
          <br />
          <button  className="btnStyle" onClick={calInt}>Calculate</button>
        

        <h1>Total Interest:{interest}</h1>
      </div>
    </div>
  );
};

export default PrincipleInterest;
