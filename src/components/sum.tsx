import React, { useState } from "react";

export const Sum: React.FC = () => {
  const [result, setResult] = useState<number>(0);

  const sumNumbers = (a: number, b: number) => {
    setResult(a + b);
  };

  return (
    <div className={""}>
      <h1>{result}</h1>
    </div>
  );
};
