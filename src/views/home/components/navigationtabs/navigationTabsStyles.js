import { Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../../../../styles/colors";

export const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: colors.white,
  },
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    height: "31px",
    color: colors.link,
    "&.Mui-selected": {
      color: "#fff",
      backgroundColor: "#2a475e",
      borderRadius: "20px 20px 0px 0px",
    },
    "&.Mui-focusVisible": {
      backgroundColor: colors.white,
    },
  })
);
