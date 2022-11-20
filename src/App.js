import React, { useState } from "react";
import data from "./data";

function App() {
  const [text, setText] = useState(data);
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNumber(newValue);
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={number}
          onChange={handleChange}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">{text.map(() => {})}</article>
    </section>
  );
}

export default App;
