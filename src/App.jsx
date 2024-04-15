import { useState } from "react";
import "./App.css";
import { Profile } from "./Profile";
import { WelcomePage } from "./WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* use this button to change what is rendered */}
      <button onChange={null}>Change State</button>
      {/* render Profile or Compnent here */}
    </>
  );
}

export default App;
