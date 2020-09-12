import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import grey from "@material-ui/core/colors/grey";

const GraphTopBar = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    tab: {
      minWidth: "0",
      fontSize: "5.8px",
      padding: "0",
      color: theme.palette.secondary.main,
    },
    grid: {
      backgroundColor: theme.palette.primary.main,
      paddingLeft: "1vh",
      border: "1px solid",
      borderColor: theme.palette.secondary.dark,
    },
  }));

  const classes = useStyles();

  return (
    <Grid className={classes.grid} container>
      <Grid item xs={6} container alignItems="center">
        <Typography variation="body1" color="secondary">
          BTC-USD-CME
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
          onChange={handleChange}
          variant="fullWidth"
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Tab label="1H" classes={{ root: classes.tab }} />
          <Tab label="1W" classes={{ root: classes.tab }} />
          <Tab label="1D" classes={{ root: classes.tab }} />
          <Tab label="1M" classes={{ root: classes.tab }} />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default GraphTopBar;
