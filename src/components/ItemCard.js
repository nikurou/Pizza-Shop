import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Colors from "../constants/Color";
import tastemaker from "../assets/images/tastemaker.jpg";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "30%",
    height: "315px",
    overflow: "hidden",
    border: "1px solid gray ",
    backgroundColor: Colors.backgroundSecondary,
    overflow: "hidden",
    paddingBottom: "1%",
  },
  cardImage: {
    width: "100%",
    height: "auto",
  },
  cardTitle: {
    "& $h3": {
      marginTop: "0px",
    },
  },
  cardDescription: {},
  infoContainer: {
    color: "white",
    marginLeft: "2%",
    fontFamily: "'sharp_sans_bold',sans-serif",
    marginTop: "5px",
  },
  cardButtonContainer: {
    marginTop: "3%",
  },
  buttonRoot: {
    backgroundColor: "black",
    height: "40px",
    color: "white",
    "&:hover": { backgroundColor: "lightgray" },
    borderRadius: "10px",
  },
}));
const ItemCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardImage}>
        <img className={classes.cardImage} src={tastemaker} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.cardTitle}>
          <h3>Lorem Ipsum dolor</h3>
        </div>
        <div className={classes.cardDescription}>
          <span>SIT AMET, CONSECTETUR ADIPSCING ELIT.</span>
        </div>
        <div className={classes.cardButtonContainer}>
          <Button classes={{ root: classes.buttonRoot }}>
            <h5>Order Now</h5>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
