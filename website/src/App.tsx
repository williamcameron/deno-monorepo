import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { login, greet } from "@scope/simple-login";

type User = {
  displayName: string;
  lastLoggedIn: string;
};

function App() {
  const [count, setCount] = useState(0);

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({
    displayName: "Logged out user",
    lastLoggedIn: new Date().toLocaleString(),
  } as User);

  const doLogin = (): void => {
    const result = login(username, password);
    setLoggedIn(result);
    if (result) {
      alert("Logged in");
      setUserData({
        displayName: username,
        lastLoggedIn: new Date().toLocaleString(),
      });
    } else {
      alert("Invalid username or password");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Deno + TypeScript + Workspaces</h1>
      <div className="card">
        <button onClick={() => setCount((count: number): number => count + 1)}>
          count is {count}
        </button>

        {!loggedIn && (
          <>
            <h1>Not Logged In</h1>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                backgroundColor: "rbga(0, 0, 0, 0.1)",
                width: "300px",
                justifyContent: "center",
                margin: "auto",
                padding: "20px",
                borderRadius: "5px",
              }}
              onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
              }}
            >
              <label style={{ display: "flex" }}>
                Username:
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                  }
                  style={{ marginLeft: "10px" }}
                />
              </label>
              <label style={{ display: "flex" }}>
                Password:
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  style={{ marginLeft: "10px" }}
                />
              </label>
              <button onClick={(): void => doLogin()}>Login</button>
            </form>
          </>
        )}

        {loggedIn && (
          <>
            <h1>Logged In</h1>
            <h2>{greet(userData.displayName)}</h2>
            <p>Last logged in: {userData.lastLoggedIn}</p>
            <button onClick={(): void => setLoggedIn(false)}>Logout</button>
          </>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
