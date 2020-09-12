import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

export default function TopBar() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    topBar: {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      position: "sticky",
      top: "0",
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "1vh",
    },
    tab: {
      fontSize: "7px",
      minWidth: "0",
    },
  }));

  const classes = useStyles();

  return (
    <Paper square className={classes.topBar}>
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={handleChange}
      >
        <Tab label="ID" className={classes.tab} />
        <Tab label="CREATED" className={classes.tab} />
        <Tab label="LAST OPENED" className={classes.tab} />
        <Tab label="INSTRUMENT" className={classes.tab} />
        <Tab label="QTY" className={classes.tab} />
        <Tab label="BID" className={classes.tab} />
        <Tab label="ASK" className={classes.tab} />
        <Tab label="DELTA" className={classes.tab} />
        <Tab label="MODEL VOL" className={classes.tab} />
        <Tab label="STATUS" className={classes.tab} />
        <Tab label="CLEARING" className={classes.tab} />
      </Tabs>
    </Paper>
  );
}
