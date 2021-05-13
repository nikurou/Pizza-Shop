import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    height: 141,
    width: "30%",
    marginTop: "2%",
    direction: "ltr",
    display: "inline-block",
    position: "relative",

    "& img": {
      height: 141,
      transition: "width 1s, height 1s",

      width: "100%",
    },

    "& :hover": {
      width: "110%",
      height: "110%",
    },
  },
  menuImage: {
    width: "20%",
  },
  menuTitle: {
    position: "absolute",
    top: "0",
    left: 0,
    marginLeft: "2%",
    marginTop: "1%",
    "& $h5": {
      marginTop: 0,
      color: "white",
      fontSize: 20,
    },
  },
}));

const MenuItem = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.menuContainer}>
      <img src={props.image} alt="item_image" />
      <div className={classes.menuTitle}>
        <h5>{props.itemName}</h5>
      </div>
    </div>
  );
};

export default MenuItem;
