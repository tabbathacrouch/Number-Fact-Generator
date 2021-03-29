import React, { useState, useEffect, useRef } from "react";
import 'tachyons';

function Form({ getFacts }) {
  const [number, setNumber] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setNumber("");
    // client-side (form) validation
    const validate = number % parseInt(number);
    if ((isNaN(validate) || validate !== 0) && parseInt(number) !== 0) {
      alert("Only integers are allowed for this number fact generator.");
      return;
    }
    // send validated number to server (numbers api)
    getFacts(number);
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="ma2"
          type="text"
          placeholder="Enter a number"
          value={number}
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="tc" value={number} id="trivia">
          Generate Math Fact
        </button>
      </form>
    </div>
  );
}

export default Form;
