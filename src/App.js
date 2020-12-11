import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("ok");

  const handleClick = () => {
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>click</button>
      <input
        type="text"
        value={value}
        placeholder="podaj napis"
        onChange={handleChange}
      />
      <h1>{value}</h1>
    </div>
  );
};

export default App;
