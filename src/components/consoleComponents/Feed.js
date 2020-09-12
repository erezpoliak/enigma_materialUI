import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const Feed = () => {
  const useStyles = makeStyles((theme) => ({
    containerBox: {
      backgroundColor: theme.palette.primary.dark,
      padding: "0.5vw 0 0.5vw 1vw",
      height: "100%",
    },
    info: {
      color: theme.palette.info.dark,
    },
    warning: {
      color: theme.palette.warning.main,
    },
  }));

  const classes = useStyles();

  const data = [
    { info: true },
    { info: true },
    { info: true },
    { info: false },
    { info: true },
    { info: true },
    { info: true },
    { info: true },
    { info: true },
    { info: false },
    { info: true },
    { info: true },
    { info: true },
    { info: true },
    { info: true },
    { info: false },
    { info: false },
  ];

  const date = "[2020-08-21 13:11:05]prdocution";

  return (
    <Box className={classes.containerBox}>
      {data.map((i) => {
        if (i.info) {
          return (
            <Box display="flex">
              <Typography color="secondary" variant="body1">
                {date}
              </Typography>
              <Typography variant="body1" className={classes.info}>
                INFO
              </Typography>
              <Typography color="secondary" variant="body1">
                EUR-USD - limited price : 1.1762 - message : inserted id :
                1782721
              </Typography>
            </Box>
          );
        } else {
          return (
            <Box display="flex">
              <Typography color="secondary" variant="body1">
                {date}
              </Typography>
              <Typography className={classes.warning} variant="body1">
                WARNING
              </Typography>
              <Typography color="secondary" variant="body1">
                :login
              </Typography>
              <Typography color="error" variant="body1">
                failed
              </Typography>
              <Typography color="secondary" variant="body1">
                .Wrong number of segments
              </Typography>
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default Feed;
