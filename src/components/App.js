import React from "react";
import CompanyFeed from "./companyFeedComponents/CompanyFeed";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import grey from "@material-ui/core/colors/grey";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Graph from "./graphComponents/Graph";
import Temp from "./counterPartyFeedComponents/CounterPartyFeed";
import TransactionWindow from "./TransactionWindow";
import Console from "./consoleComponents/Console";

const App = () => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: blueGrey[700],
        dark: blueGrey[900],
      },
      secondary: {
        main: grey[300],
        dark: grey[500],
      },
    },
    typography: {
      body2: {
        fontSize: "5.8px",
      },
      body1: {
        fontSize: "7px",
      },
      caption: {
        fontSize: "4.8px",
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    gridItem: {
      height: "calc(40% - 8px)",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          // spacing={2}
          style={{ backgroundColor: grey[900], height: "calc(100vh + 8px)" }}
          spacing={1}
        >
          <Grid item xs={3} className={classes.gridItem}>
            <CompanyFeed />
          </Grid>

          <Grid item xs={3} className={classes.gridItem}>
            <CompanyFeed />
          </Grid>
          <Grid item xs={3}>
            <Graph />
            <Graph />
          </Grid>
          <Grid item xs={3}>
            <Graph />
            <Graph />
          </Grid>
          <Grid item xs={4} style={{ height: "calc(30% - 8px)" }}>
            <Temp />
          </Grid>
          <Grid item xs={2} style={{ height: "calc(30% - 8px)" }}>
            <TransactionWindow />
            <TransactionWindow />
          </Grid>
          <Grid item xs={3} style={{ height: "calc(20% - 8px)" }}>
            <Graph />
          </Grid>
          <Grid item xs={6} style={{ height: "calc(30% - 8px)" }}>
            <Console />
          </Grid>
          <Grid item xs={6} style={{ height: "calc(30% - 8px)" }}>
            <Console />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </>
  );
};

export default App;
