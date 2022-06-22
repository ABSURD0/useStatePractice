import React from "react";

import Example from "./Example";
import PracticeUseEffect from "./PracticeUseEffect";

import "./Modal.css";

const Modal = () => {
  const hey = "Hey";
  const dude = " dude!";

  return (
    <div className="modal-window">
      <h1
        style={{
          color: "blue",
        }}
      >
        {hey},{dude}
      </h1>
      <Example />
      {/* <PracticeUseEffect /> */}
    </div>
  );
};

export default Modal;
