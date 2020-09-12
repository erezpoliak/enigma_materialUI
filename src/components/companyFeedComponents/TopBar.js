import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

const TopBar = () => {
  const useStyles = makeStyles((theme) => ({
    topBox: {
      display: "flex",
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.secondary.dark,
      padding: "1vh",
    },
    filterBox: {
      display: "flex",
      justifyContent: "space-between",
      borderColor: theme.palette.secondary.dark,
      padding: "0.4vh",
      borderStyle: "solid",
      borderWidth: "1px",
      marginLeft: "0.5vw",
    },
  }));

  const classes = useStyles();

  return (
    <Box style={{ position: "sticky", top: "0" }}>
      <Box border={1} className={classes.topBox}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Typography color="secondary" variant="body1">
              FILTERS APPLIED:
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.filterBox}>
            <Typography
              color="secondary"
              variant="body2"
              style={{ opacity: "0.75" }}
            >
              Filter1
            </Typography>
            <Typography
              color="secondary"
              variant="body2"
              style={{ opacity: "0.75" }}
            >
              X
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.filterBox}>
            <Typography
              color="secondary"
              variant="body2"
              style={{ opacity: "0.75" }}
            >
              Filter1
            </Typography>
            <Typography
              color="secondary"
              variant="body2"
              style={{ opacity: "0.75" }}
            >
              X
            </Typography>
          </Grid>
          <Grid item xs={2} className={classes.filterBox}>
            <Typography
              color="secondary"
              variant="body2"
              style={{ opacity: "0.75" }}
            >
              Filter1
            </Typography>
            <Typography
              color="secondary"
              variant="body2"
              style={{ opacity: "0.75" }}
            >
              X
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.topBox} border={1}>
        <Grid container alignItems="center">
          <Grid container item xs={3}>
            <Typography color="secondary" variant="body2" align="center">
              COMNPANY NAME
            </Typography>
          </Grid>
          <Grid container item xs={3} justify="center">
            <Typography color="secondary" variant="body2" align="center">
              PRODUCT
            </Typography>
          </Grid>
          <Grid container item xs={3} justify="center">
            <Typography color="secondary" variant="body2" align="center">
              SENT AT
            </Typography>
          </Grid>
          <Grid container item xs={3} justify="center">
            <Typography color="secondary" variant="body2" align="center">
              STATUS
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBar;
