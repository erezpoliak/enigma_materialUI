import React from "react";
import Chart from "react-google-charts";
import Spinner from "../Spinner";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Box from "@material-ui/core/Box";
import GraphTopBar from "./GraphTopBar";
import { makeStyles } from "@material-ui/core/styles";

const Graph = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: theme.palette.primary.dark,
      height: "20vh",
    },
    loaderWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80%",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <GraphTopBar />
      <Chart
        height="80%"
        chartType="LineChart"
        loader={
          <Box className={classes.loaderWrapper}>
            <Spinner />
          </Box>
        }
        data={[
          [
            { type: "number", label: "x" },
            { type: "number", label: "values" },
            { id: "i0", type: "number", role: "interval" },
            { id: "i1", type: "number", role: "interval" },
            { id: "i2", type: "number", role: "interval" },
            { id: "i2", type: "number", role: "interval" },
            { id: "i2", type: "number", role: "interval" },
            { id: "i2", type: "number", role: "interval" },
          ],
          [1, 100, 90, 110, 85, 96, 104, 120],
          [2, 120, 95, 130, 90, 113, 124, 140],
          [3, 130, 105, 140, 100, 117, 133, 139],
          [4, 90, 85, 95, 85, 88, 92, 95],
          [5, 70, 74, 63, 67, 69, 70, 72],
          [6, 30, 39, 22, 21, 28, 34, 40],
          [7, 80, 77, 83, 70, 77, 85, 90],
          [8, 100, 90, 110, 85, 95, 102, 110],
        ]}
        options={{
          intervals: { style: "sticks" },
          legend: "none",
          backgroundColor: blueGrey[900],
        }}
      />
    </Box>
  );
};

export default Graph;
