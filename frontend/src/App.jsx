import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <Dashboard onLogout={() => setIsLoggedIn(false)} />
  
    </div>
  );
}

export default App;