import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [numberFact, setNumberFact] = useState(null);

  const getFacts = (number) => {
    fetch(`http://numbersapi.com/${number}/math`)
      .then((response) => {
        // server-side validation
        // if (!response.ok) {
        //   alert("Enter a number.");
        // }
        return response.text();
      })
      .then((data) => setNumberFact(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Form getFacts={getFacts} />
        <Display numberFact={numberFact} />
      </div>
    </div>
  );
}

export default App;
