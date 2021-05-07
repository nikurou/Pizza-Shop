import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Colors from "../constants/Color";
import pizza_hero_banner from "../assets/images/pizza_hero_banner.jpg";
import { Button, Paper } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ItemCard from "../components/ItemCard";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "20px",
  },
  heroBanner: {
    width: "100%",
    height: "auto",
  },
  web2Widget: {
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "2%",
  },
  paperRoot: {
    display: "flex",
    border: "1px solid red",
    borderRadius: "15px",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  vertiLine: {
    minHeight: "50px",
    height: "auto",
    width: 0.5,
    background: "lightgray",
  },
  buttonRoot: {
    backgroundColor: Colors.redText,
    height: "40px",
    width: "30%",
    color: "white",
    "&:hover": { backgroundColor: "lightgray" },
    borderRadius: "10px",
  },
  dealsTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    marginTop: "15px",
    "& a": { fontSize: "15px", color: Colors.redText, marginLeft: "15px" },
  },
  dealCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <img
        className={classes.heroBanner}
        src={pizza_hero_banner}
        alt={"hero_banner"}
      />
      <div className={classes.web2Widget}>
        <Paper classes={{ root: classes.paperRoot }} elevation={5}>
          <h1>
            <LocationOnIcon />
            START HERE
          </h1>
          <span className={classes.vertiLine} />
          <h3>Find your store to see local deals</h3>
          <Button classes={{ root: classes.buttonRoot }}>
            <h3>Find Deals</h3>
          </Button>
        </Paper>
      </div>
      <div className={classes.deals}>
        <div className={classes.dealsTitle}>
          <h1>
            DEALS
            <a>
              VIEW ALL <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </a>
          </h1>
        </div>
        <div className={classes.dealCards}>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
          <ItemCard></ItemCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
