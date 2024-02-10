import React from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter, Header } from "@repo/ui";

function App() {
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
      <Header title="Docs" />
      <div className="card">
        <Counter />
      </div>
    </>
  );
}

export default App;
