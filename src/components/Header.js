import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Menu, MenuItem, Paper } from "@material-ui/core";
import Colors from "../constants/Color";
import logo from "../assets/images/pizza_hut_logo.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "6.1%",
    backgroundColor: Colors.backgroundSecondary,
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: "10%",
    marginTop: "2%",
    marginBottom: "2%",
  },
  leftSide: {
    height: "100%",
    width: "30%",
    display: "flex",
    alignItems: "center",
    marginLeft: "10%",
  },
  rightSide: {
    backgroundColor: "#800000",
    width: "12%",
    marginRight: "10%",
    display: "flex",
  },
  button: {
    marginLeft: "2%",
    marginRight: "2%",
    "& :hover , &$focusVisible": {
      "&:hover $buttonLine": { backgroundColor: "white", width: 50 },
    },
  },
  signInButton: {
    width: "100%",
    "& $span": {
      marginTop: 0,
    },
    "& :hover , &$focusVisible": {
      "&:hover $buttonLine": { backgroundColor: "white", width: "100%" },
    },
  },
  signInButtonTextContainer: {
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    "& $span": {
      color: "red",
      fontWeight: "bold",
      fontSize: 11,
      marginTop: 0,
    },
    "& $h4": { fontSize: 12, marginTop: 0 },
  },
  menuDropdown: {
    marginTop: "2%",
    "& .MuiMenu-list": {},
    "& .MuiMenu-paper": {},
  },
  buttonLine: {
    height: 3,
    width: 30,
    backgroundColor: "black",
    position: "absolute",
    bottom: -2,
    marginRight: "50%",
    marginLeft: "50%",
    transition: "0.2s",
    color: "white",
  },
  profileImage: {
    marginRight: "5%",
    height: "25%",
    width: "25%",
    marginBottom: 10,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper className={classes.header} elevation={4} square={true}>
      <div className={classes.leftSide}>
        <img className={classes.logo} src={logo} alt={"logo"} />
        <Button className={classes.button}>
          Deals <span className={classes.buttonLine} />
        </Button>
        <Button className={classes.button} onClick={handleClick}>
          Menu <KeyboardArrowDownIcon /> <span className={classes.buttonLine} />
        </Button>
        <Menu
          className={classes.menuDropdown}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Pizza</MenuItem>
          <MenuItem onClick={handleClose}>Wings</MenuItem>
          <MenuItem onClick={handleClose}>Sides</MenuItem>
          <MenuItem onClick={handleClose}>Pasta</MenuItem>
          <MenuItem onClick={handleClose}>Deserts</MenuItem>
          <MenuItem onClick={handleClose}>Drinks</MenuItem>
        </Menu>
      </div>
      <Paper className={classes.rightSide} elevation={6} square={true}>
        <Button className={classes.signInButton}>
          <AccountCircleOutlinedIcon className={classes.profileImage} />
          <div className={classes.signInButtonTextContainer}>
            <span>Hut Rewards</span>
            <h4>Sign in/Join</h4>
          </div>
          <span className={classes.buttonLine} />
        </Button>
      </Paper>
    </Paper>
  );
};

export default Header;
