import React from "react";
import menu_image from "../assets/images/menu_image.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    backgroundImage: `url(${menu_image})`,
    height: 141,
    width: "30%",
    marginTop: "2%",
  },
  menuImage: {
    width: "20%",
  },
  menuTitle: {
    marginLeft: "2%",
    marginTop: "1%",
    "& $h3": {
      marginTop: 0,
      color: "white",
    },
  },
}));

const MenuItem = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.menuContainer}>
      <div className={classes.menuTitle}>
        <h3>Item Name</h3>
      </div>
    </div>
  );
};

export default MenuItem;
