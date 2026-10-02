import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setMessage("Welcome Admin!");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username and password");
    }
  };
  const handleLogout = () => { setIsLoggedIn(false); setMessage(""); setUsername(""); setPassword(""); };

  return (
    <div>
      <h2>3.Login Form :-</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
      <br /><br />
      {isLoggedIn && (
        <button onClick={handleLogout}>Logout</button>
      )}
      <h3>{message}</h3>
    </div>
  );
}

export default LoginForm;

