import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import colors from "./colors";

export const FakeLink = withStyles({
  root: {
    color: colors.link,
    fontStyle: "italic",
    fontSize: "0.8rem",
    "&:hover": {
      color: colors.white,
      cursor: "pointer",
    },
  },
})(Typography);
