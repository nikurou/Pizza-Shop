import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Colors from "../constants/Color";
import tastemaker from "../assets/images/tastemaker.jpg";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "30%",
    height: "315px",
    overflow: "hidden",
    border: "1px solid lightgray ",
  },
  cardImage: {
    width: "100%",
    height: "auto",
  },
}));
const ItemCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardImage}>
        <img className={classes.cardImage} src={tastemaker} />
      </div>
      <div className={classes.cardTitle}></div>
      <div className={classes.cardDescription}> </div>
      <div className={classes.cardButton}></div>
    </div>
  );
};

export default ItemCard;
