import React, { useState } from "react";
import { AppContext } from "./AppContext";
import Counter from "./Counter";

const App = () => {
  const [value, setValue] = useState("ok");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <AppContext.Provider value="blue">
        <Counter />
      </AppContext.Provider>
    </div>
  );
};

export default App;
