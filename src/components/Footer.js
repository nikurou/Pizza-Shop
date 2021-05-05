import { makeStyles } from "@material-ui/core";
import React from "react";
import Colors from "../constants/Color";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
    width: "80%",
  },
  divLine: {
    width: "80%",
    height: 1,
    backgroundColor: "lightgray",
    marginBottom: "100px",
    position: "absolute",
  },
  blockOne: {
    display: "flex",
    width: "100%",
  },
  b1c1: {
    display: "flex",
    flexDirection: "column",
    flex: 5,
    marginBottom: "10%",
    "& $h2": {
      fontSize: "28px",
      color: Colors.blackText,
      marginBottom: "12px",
      lineHeight: "1.14",
      fontFamily: "PHFont",
    },
    "& $span": {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "1.43",
      letterSpacing: "1px",
      color: Colors.redText,
      marginTop: 0,
    },
  },
  b1c234: {
    flex: 2.5,
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    "& $p": {
      fontSize: "12px",
      color: Colors.blackText,
      marginBottom: "3px",
      lineHeight: "1.5",
      letterSpacing: "1px",
      fontWeight: "700",
    },
  },
  iconStyle: {
    color: Colors.blackText,
    marginRight: 5,
  },
  iconRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10%",
  },
  footerMid: {
    fontFamily: "open_sans, sans-serif",
    marginBottom: "18px",
    marginTop: "18px",
    "& $p": {
      fontSize: "12px",
      color: Colors.blackText,
    },
  },
  footerBottom: {
    fontFamily: "open_sans, sans-serif",
    marginBottom: "18px",
    marginTop: "30px",
    "& $p": {
      fontSize: "12px",
      color: Colors.blackText,
      lineHeight: "20px",
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  let match = useRouteMatch();

  return (
    <div className={classes.footerContainer}>
      <span className={classes.divLine} />
      <div className={classes.blockOne}>
        <div className={classes.b1c1}>
          <h2>Get our mobile app</h2>
          <span>
            <AppleIcon className={classes.iconStyle} />
            APPLE STORE
          </span>
          <span>
            <AndroidIcon className={classes.iconStyle} />
            GOOGLE PLAY STORE
          </span>
          <div className={classes.iconRow}>
            <FacebookIcon className={classes.iconStyle} />
            <InstagramIcon className={classes.iconStyle} />
            <TwitterIcon className={classes.iconStyle} />
            <YouTubeIcon className={classes.iconStyle} />
          </div>
        </div>
        <div className={classes.b1c234}>
          <p>MENU</p>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Pizza</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Wings</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Sides</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Pasta</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Desserts</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Drinks</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}> Deals </a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Dipping sauces</a>
          </Link>
          <p>MY ACCOUNT</p>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Create an account</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Sign up</a>
          </Link>
        </div>
        <div className={classes.b1c234}>
          <p>CUSTOMER SERVICE</p>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>COVID-19 updates</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Contact us</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Find a Pizza Hut</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Restaurants by state</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>FAQS</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Gift Cards</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Sitemap </a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Español</a>
          </Link>
          <p>ABOUT OUR FOOD</p>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Restaurant quality food</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Nutrition</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Gluten free</a>
          </Link>
        </div>
        <div className={classes.b1c234}>
          <p>ABOUT US</p>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Our story</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Hut Life blog</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Careers</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Catering</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>International</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Become a franchisee</a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}> Community affairs support </a>
          </Link>
          <Link to={`${match.url}/`}>
            <a className={classes.link}>Supplier code</a>
          </Link>
        </div>
      </div>
      <span className={classes.divLine} />
      <div className={classes.footerMid}>
        <p>
          Privacy | Cookies and policy | Terms of use | Do not sell my
          information
        </p>
      </div>
      <span className={classes.divLine} />
      <div className={classes.footerBottom}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          ornare elit, ac fermentum velit. Donec tincidunt, eros in fermentum
          fermentum, augue nisi pulvinar ipsum, vitae ultricies tortor libero id
          dolor. Sed sagittis ante eu urna laoreet condimentum. Aenean laoreet
          ipsum vitae facilisis pellentesque. Curabitur sit amet cursus est. Sed
          vitae dictum massa. Aliquam pellentesque porttitor leo, et imperdiet
          leo consequat laoreet. Proin purus tellus, interdum non aliquam sit
          amet, tincidunt eu lorem. Integer malesuada odio eu orci rutrum, nec
          tempus neque porttitor. Duis sollicitudin, tellus ac tempus hendrerit,
          justo lorem imperdiet turpis, sed varius tortor diam et eros. Vivamus
          blandit, mi ut dapibus.
          <br />
          <br />
          Vivamus arcu dui, malesuada ornare fringilla sed, tempor faucibus
          eros. Aliquam gravida odio condimentum, fermentum felis sed, ultrices
          risus.
          <br />
          <br />© Proin at congue sem. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Donec vel
          cursus massa. Pellentesque ullamcorper.
          <br />
          <br />
          Quisque © mattis , Inc. 1997-2019 imperdiet 5,991,739; 6,801,228;
          Maecenas Suspendisse scelerisque quam © pulvinar , Co. 1986-2019
          dictum quis accumsan
        </p>
      </div>
    </div>
  );
};

export default Footer;
