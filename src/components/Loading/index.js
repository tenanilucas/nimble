import React from "react";
import NavBar from "../NavBar";
import "./styles.scss";

function Loading() {
  return (
    <>
      <NavBar />
      <main>
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </main>
    </>
  );
}

export default Loading;
