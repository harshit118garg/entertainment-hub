import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="App">
        <span className="header" onClick={() => window.scroll(0, 0)}>
          🎬 Entertainment Hub 🎥
        </span>
      </div>
    </>
  );
}

export default Header;
