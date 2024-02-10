import React from "react";
import { Link } from "../../router/src/index";
export function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/web">Web</Link>
      </div>
    </>
  );
}
