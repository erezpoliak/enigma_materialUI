import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";

const Feed = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: theme.palette.primary.dark,
      padding: "1vh",
    },
    active: {
      color: theme.palette.success.main,
    },
    cancelled: {
      color: theme.palette.error.main,
    },
  }));

  const classes = useStyles();

  const data = [
    {
      companyName: "PS Business Parks, Inc.",
      product: "PSB^U",
      sentAt: "12/19/2019",
      status: true,
    },
    {
      companyName: "Boston Private Financial Holdings, Inc.",
      product: "BPFH",
      sentAt: "6/2/2020",
      status: false,
    },
    {
      companyName: "Acadia Healthcare Company, Inc.",
      product: "ACHC",
      sentAt: "4/12/2020",
      status: false,
    },
    {
      companyName: "Natus Medical Incorporated",
      product: "BABY",
      sentAt: "5/14/2020",
      status: true,
    },
    {
      companyName: "Universal Stainless & Alloy Products, Inc.",
      product: "USAP",
      sentAt: "1/6/2020",
      status: false,
    },
    {
      companyName: "Wheeler Real Estate Investment Trust, Inc.",
      product: "WHLRD",
      sentAt: "3/17/2020",
      status: true,
    },
    {
      companyName: "Theravance Biopharma, Inc.",
      product: "TBPH",
      sentAt: "5/7/2020",
      status: true,
    },
    {
      companyName: "Bioanalytical Systems, Inc.",
      product: "BASI",
      sentAt: "7/13/2020",
      status: false,
    },
    {
      companyName: "Martin Marietta Materials, Inc.",
      product: "MLM",
      sentAt: "9/18/2019",
      status: true,
    },
    {
      companyName: "Jacksonville Bancorp Inc.",
      product: "JXSB",
      sentAt: "8/31/2020",
      status: false,
    },
    {
      companyName: "Electronic Arts Inc.",
      product: "EA",
      sentAt: "5/20/2020",
      status: true,
    },
    {
      companyName: "American Superconductor Corporation",
      product: "AMSC",
      sentAt: "9/11/2019",
      status: false,
    },
  ];

  return (
    <Box className={classes.container}>
      {data.map((i) => {
        return (
          <Grid container justify="space-between" style={{ paddingTop: "1vh" }}>
            <Grid item xs={3} container alignItems="center">
              <Typography color="secondary" variant="body2">
                {i.companyName}
              </Typography>
            </Grid>
            <Grid item xs={3} container justify="center" alignItems="center">
              <Typography color="secondary" variant="body2">
                {i.product}
              </Typography>
            </Grid>
            <Grid item xs={3} container justify="center" alignItems="center">
              <Typography
                color="secondary"
                variant="body2"
                style={{ opacity: "0.75" }}
              >
                {i.sentAt}
              </Typography>
            </Grid>
            <Grid item xs={3} container justify="center" alignItems="center">
              {i.status ? (
                <Box display="flex" className={classes.active}>
                  <FiberManualRecordTwoToneIcon style={{ fontSize: "1vh" }} />
                  <Typography variant="body2" style={{ marginLeft: "0.3vw" }}>
                    Active
                  </Typography>
                </Box>
              ) : (
                <Box display="flex" className={classes.cancelled}>
                  <FiberManualRecordTwoToneIcon style={{ fontSize: "1vh" }} />
                  <Typography variant="body2" style={{ marginLeft: "0.3vw" }}>
                    Cancelled
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default Feed;
