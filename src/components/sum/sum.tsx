import React, { useState } from "react";

export const Sum: React.FC = () => {
  const [result, setResult] = useState<number>(0);

  const sumNumbers = (a: number, b: number) => {

    if (typeof b !== "number" || typeof a !== "number") {
      alert("Error both values must be type number");
    }
    setResult(a + b);
  };

  React.useEffect(() => {
    sumNumbers(2, 5);
  }, [])
  
  return (
    <div className={""}>
      <h1>{result}</h1>
    </div>
  );
};
