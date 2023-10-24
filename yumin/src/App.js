import React, { useState } from "react";
import "./App.css";
import heart from "./hand.png";
import emoji from "./emoji.png";

function App() {
  const [yes, setYes] = useState(false);

  const onNo = () => {
    alert("WRONG ANSWER!!! TRY AGAIN");
    setYes(false);
  };

  const onYes = () => {
    setYes(true);
  };

  return (
    <div className="main-container">
      <div className="content">
        <p>Do you want to be my girlfriend?</p>
        <img src={yes ? heart : emoji} alt="heart"></img>
        <div className="buttons">
          <button className="button" onClick={onYes}>
            Yes
          </button>
          <button className="button" onClick={onNo}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
