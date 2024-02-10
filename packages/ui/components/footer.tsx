import React from "react";
export function Footer() {
  return (
    <>
      <div
        className="navigation"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div>
          <a href="http://localhost:3001">http://localhost:3001</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="http://localhost:3002">http://localhost:3002</a>
          <span>(this breaks!)</span>
        </div>
      </div>
    </>
  );
}
