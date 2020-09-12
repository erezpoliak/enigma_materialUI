import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const TopBar = () => {
  const useStyles = makeStyles((theme) => ({
    topBox: {
      display: "flex",
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.secondary.dark,
      padding: "1vh",
    },
    stickyTopBar: {
      position: "sticky",
      top: "0",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.stickyTopBar}>
      <Box border={1} className={classes.topBox}>
        <Typography color="secondary" variant="body1">
          Threshold
        </Typography>
        <Typography
          color="secondary"
          variant="body1"
          style={{ fontWeight: "bold", paddingLeft: "1vh" }}
        >
          1000
        </Typography>
      </Box>
      <Box border={1} className={classes.topBox} style={{ opacity: "0.75" }}>
        <Grid container justify="space-between">
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              COUNTERPARTY
            </Typography>
          </Grid>
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              BTC
            </Typography>
          </Grid>
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              ETH
            </Typography>
          </Grid>
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              XRP
            </Typography>
          </Grid>
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              EUR
            </Typography>
          </Grid>
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              USD
            </Typography>
          </Grid>
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              GBR
            </Typography>
          </Grid>
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              NET EXPOSURE
            </Typography>
          </Grid>
          <Grid item xs={1} container justify="center" alignItems="center">
            <Typography variant="caption" color="secondary">
              LAST CALCULATION DATE
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBar;
