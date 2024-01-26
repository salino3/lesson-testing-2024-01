import { useState } from "react";
import "./App.css";
import { Sum } from "./components/sum/sum";
import { ProfileCard } from "./components/profile-card/profile-card";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ProfileCard />
      <Sum />
    </div>
  );
}

export default App;
