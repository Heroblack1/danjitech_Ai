import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import AIChatWidget from "./AIChatWidget";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AIChatWidget />
    </>
  );
}

export default App;
