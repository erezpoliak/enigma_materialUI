import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const Feed = () => {
  const useStyles = makeStyles((theme) => ({
    mainGrid: {
      backgroundColor: theme.palette.primary.dark,
      padding: "1vh",
    },
  }));

  const classes = useStyles();

  const data = [
    {
      counterparty: "Shufflebeat",
      btc: 13,
      eth: 48,
      xrp: 83,
      eur: 73,
      usd: 73,
      gbr: 14,
      netExposure: 92,
      date: "7/10/2020",
    },
    {
      counterparty: "Gabtune",
      btc: 71,
      eth: 96,
      xrp: 17,
      eur: 70,
      usd: 8,
      gbr: 100,
      netExposure: 52,
      date: "4/3/2020",
    },
    {
      counterparty: "Riffwire",
      btc: 6,
      eth: 56,
      xrp: 41,
      eur: 31,
      usd: 47,
      gbr: 22,
      netExposure: 9,
      date: "1/7/2020",
    },
    {
      counterparty: "Zoozzy",
      btc: 31,
      eth: 92,
      xrp: 19,
      eur: 18,
      usd: 39,
      gbr: 51,
      netExposure: 49,
      date: "6/29/2020",
    },
    {
      counterparty: "Skyndu",
      btc: 58,
      eth: 77,
      xrp: 83,
      eur: 45,
      usd: 84,
      gbr: 64,
      netExposure: 16,
      date: "8/21/2020",
    },
    {
      counterparty: "InnoZ",
      btc: 48,
      eth: 86,
      xrp: 33,
      eur: 24,
      usd: 16,
      gbr: 39,
      netExposure: 76,
      date: "6/2/2020",
    },
    {
      counterparty: "Fadeo",
      btc: 50,
      eth: 59,
      xrp: 63,
      eur: 89,
      usd: 43,
      gbr: 31,
      netExposure: 26,
      date: "4/30/2020",
    },
    {
      counterparty: "Babbleset",
      btc: 69,
      eth: 98,
      xrp: 72,
      eur: 52,
      usd: 1,
      gbr: 14,
      netExposure: 98,
      date: "2/3/2020",
    },
    {
      counterparty: "Vimbo",
      btc: 11,
      eth: 5,
      xrp: 71,
      eur: 84,
      usd: 34,
      gbr: 95,
      netExposure: 43,
      date: "9/25/2019",
    },
    {
      counterparty: "Feedfish",
      btc: 21,
      eth: 77,
      xrp: 89,
      eur: 43,
      usd: 40,
      gbr: 99,
      netExposure: 22,
      date: "11/2/2019",
    },
  ];

  return (
    <Box>
      {data.map((i) => {
        return (
          <Grid container className={classes.mainGrid} justify="space-between">
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.counterparty}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.btc}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.eth}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.xrp}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.eur}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.usd}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.gbr}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.netExposure}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Typography color="secondary" variant="body2">
                {i.date}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default Feed;
