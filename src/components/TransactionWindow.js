import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

const TransactionWindow = () => {
  const useStyles = makeStyles((theme) => ({
    topBox: {
      borderColor: theme.palette.primary.dark,
      backgroundColor: theme.palette.primary.main,
      height: "20%",
    },
    flexContainer: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    gridContainer: {
      backgroundColor: theme.palette.primary.dark,
      height: "80%",
    },
    bottomBox: {
      width: "100%",
      borderColor: grey[500],
      paddingLeft: "0.5vw",
    },
  }));

  const classes = useStyles();

  return (
    <Box height="50%" style={{ overflow: "scroll" }}>
      <Box border={1} className={classes.topBox}>
        <SwapHorizIcon fontSize="small" style={{ color: blueGrey[200] }} />
      </Box>
      <Grid container alignItems="center" className={classes.gridContainer}>
        <Grid item xs={5} style={{ height: "70%" }}>
          <Box
            borderRadius="borderRadius"
            className={classes.flexContainer}
            bgcolor={red[900]}
            height="100%"
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="fa-flip-horizontal"
              style={{
                color: blueGrey[200],
                fontSize: "1.3vw",
              }}
            />
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" color="secondary">
                256.47
              </Typography>
              <Typography variant="body1" color="secondary">
                Sell
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            height: "70%",
          }}
          className={classes.flexContainer}
        >
          <Typography color="secondary" variant="body1">
            18.5
          </Typography>
        </Grid>
        <Grid item xs={5} style={{ height: "70%" }}>
          <Box
            borderRadius="borderRadius"
            bgcolor={green[700]}
            className={classes.flexContainer}
            height="100%"
          >
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="fa-rotate-90"
              style={{
                color: blueGrey[200],
                fontSize: "1.3vw",
              }}
            />
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" color="secondary">
                9580.52
              </Typography>
              <Typography variant="body1" color="secondary">
                Buy
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ display: "flex" }}>
          <Box border={1} className={classes.bottomBox}>
            <Typography color="secondary" variant="body1">
              1.25
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ display: "flex" }}>
          <Box border={1} className={classes.bottomBox}>
            <Typography color="secondary" variant="body1">
              MKT
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ display: "flex" }}>
          <Box border={1} className={classes.bottomBox}>
            <Typography color="secondary" variant="body1">
              Slippage
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionWindow;
