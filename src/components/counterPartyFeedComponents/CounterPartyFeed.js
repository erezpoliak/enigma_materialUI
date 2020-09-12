import React from "react";
import TopBar from "./TopBar";
import Feed from "./Feed";
import Box from "@material-ui/core/Box";

const Temp = () => {
  return (
    <Box style={{ overflow: "scroll" }} height="100%">
      <TopBar />
      <Feed />
    </Box>
  );
};

export default Temp;
