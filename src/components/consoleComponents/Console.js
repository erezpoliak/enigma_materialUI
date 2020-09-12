import React from "react";
import TopBar from "./TopBar";
import Feed from "./Feed";

const Console = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <TopBar />
      <Feed />
    </div>
  );
};

export default Console;
