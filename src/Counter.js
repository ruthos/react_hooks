import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [result, setresult] = useState(0);

  const handleMathClick = (type, number = 1) => {
    switch (type) {
      case "subtraction":
        setCount(count + 1);
        setresult(result - number);
        break;
      case "reset":
        setCount(count + 1);
        setresult(0);
        break;
      case "addition":
        setCount(count + 1);
        setresult(result + number);
        break;
      default:
        console.log(`Sorry, we are out of`);
    }
  };

  const type = {
    subtraction: "subtraction",
    addition: "addition",
    reset: "reset"
  };

  return (
    <>
      <MathButton
        name="-10"
        number={10}
        type={type.subtraction}
        click={handleMathClick}
      />
      <MathButton
        name="-1"
        number={1}
        type={type.subtraction}
        click={handleMathClick}
      />

      <MathButton name="reset" type={type.reset} click={handleMathClick} />

      <MathButton
        name="+1"
        number={1}
        type={type.addition}
        click={handleMathClick}
      />

      <MathButton
        name="+10"
        number={10}
        type={type.addition}
        click={handleMathClick}
      />
      <ResultPanel count={count} result={result} />
    </>
  );
};

const MathButton = ({ type, number, name, click }) => {
  return <button onClick={() => click(type, number)}>{name}</button>;
};

const ResultPanel = ({ count, result }) => {
  const theme = useContext(AppContext);

  console.log(theme);

  return (
    <>
      <h1>
        {<p style={{ color: theme }}>Liczba kliknięć: {count}</p>}
        {count > 10 ? <span>. Przeciążenie procesora!</span> : null}
      </h1>
      <h1>Wynik: {result}</h1>
    </>
  );
};

export default Counter;
