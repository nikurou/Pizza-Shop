import React from "react";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "rgb(183,183,183)",
  },
  rootInput: {
    color: "white",
    "& label.Mui-focused": {
      color: "rgb(144,202,249)",
    },
    "& label": {
      color: "rgb(183,183,183)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(144,202,249)",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "rgb(183,183,183)",
    },
  },
  inputTextColor: {
    color: "white",
  },
  horizontalTextField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  rootButton: {
    "& .MuiButton-label ": {
      color: "rgb(144,202,249)",
    },
  },
});

const Alert = ({ open, handleAlert }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      aria-labelledby="form-dialog-title"
      PaperProps={{
        style: { backgroundColor: "rgb(66,66,66)", color: "rgb(144,202,249)" },
      }}
    >
      <DialogTitle id="form-dialog-title">
        THIS IS DEMO/MOCK WEBSITE
      </DialogTitle>
      <DialogContent>
        <DialogContentText classes={{ root: classes.root }}>
          A faithful recreation of Pizza Hut's landing page with various
          creative liberties taken. This website serves as a demo and is not
          connected to or affilaited with the real business, and is meant to
          serve as a portfolio piece. Parts of the website are intentionally
          non-functional.
          <br />
          <br />
          Made with React and Material UI
          <br />
          <br />
          Source Code:
          <a
            href="https://github.com/nikurou/Pizza-Shop"
            style={{ color: "white" }}
          >
            https://github.com/nikurou/Pizza-Shop
          </a>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleAlert}
          classes={{ root: classes.rootButton }}
          color="primary"
        >
          I UNDERSTAND
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert;
