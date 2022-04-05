import { Typography, IconButton, Button } from "@mui/material/";
import { withStyles } from "@mui/styles";
import colors from "../../styles/colors";

export const MenuItem = withStyles({
  root: {
    display: "block",
    position: "relative",
    paddingTop: "45px",
    paddingLeft: "7px",
    paddingRight: "7px",
    paddingBottom: "7px",
    float: "left",
    lineHeight: "16px", //
    fontSize: "14px", //
    color: "#b8b6b4",
    textTransform: "uppercase",
    "&:hover": {
      color: colors.white,
      cursor: "pointer",
    },
  },
})(Typography);

export const LogoButton = withStyles({
  root: {
    float: "left",
    paddingTop: "30px", //
    marginRight: "40px",
    width: "176px",
    "&:hover": {
      backgroundColor: colors.white,
      cursor: "pointer",
    },
  },
})(IconButton);

export const InstallButton = withStyles({
  root: {
    textTransform: "none",
    position: "relative",
    height: "21px",
    lineHeight: "24px",
    marginRight: "3px",
    backgroundColor: " #5c7e10",
    borderRadius: "0px",
    color: colors.white,
    "&:hover": {
      cursor: "pointer",
    },
  },
})(Button);

export const header = {
  background: "#0d121a",
  backgroundPosition: "center top",
  // minWidth: "1370px",
  fontFamily: "Arial,Sans-serif",
  fontWeight: 400,
  fontSize: " 15px",
};

export const content = {
  position: "relative",
  width: "60%",
  height: "104px",
  margin: "0 auto",
  // backgroundColor: "red",
};

export const menuItemContainer = {
  position: "absolute",
  left: "200px",
  display: "flex",
};

export const headerLogoImage = {
  width: "176px",
  height: "44px",
  aspectRatio: "auto 176 / 44",
};

export const actionMenu = {
  // position: "absolute",
  right: "0px",
  top: "6px",
  width: "max-content",
  color: "#b8b6b4",
  fontSize: "11px",
  zIndex: 401,
  lineHeight: "24px",
  verticalAlign: "top",
  display: "inline-block",
};

export const buttonStyles = {
  textTransform: "none",
  position: "relative",
  height: "21px",
  lineHeight: "24px",
  marginRight: "3px",
  backgroundColor: " #5c7e10",
  borderRadius: "0px",
  color: colors.white,
};
