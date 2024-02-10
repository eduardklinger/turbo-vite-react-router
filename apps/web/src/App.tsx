import React from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter, Header } from "@repo/ui";
import { useNavigate } from "@repo/router";

function App() {
  const navigate = useNavigate({ from: `/upload` });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Header title="Web" />
      <div className="card">
        <Counter />
      </div>
      <div className="card">
        <button onClick={() => navigate({ to: "/" })}>
          Navigate programmatically
        </button>
      </div>
    </>
  );
}

export default App;
