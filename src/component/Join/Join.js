import React, { useState } from "react";
import "../Join/Join.css";
import OuterLogo from "../Images/OuterLogo.svg";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};
const Join = () => {
  const [name, setName] = useState("");
  console.log(name, "name...");
  return (
    <div className="joinpage">
      <div className="joinContainer">
        <img src={OuterLogo} alt="OuterLogo" />
        <h1>Start Chart</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        />

        <Link onClick={(e) => (!name ? e.preventDefault() : null)} to="/chat">
          <button onClick={sendUser} className="joinBtn">
            Unite
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
