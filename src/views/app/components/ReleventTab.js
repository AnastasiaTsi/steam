import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Paper } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CommentIcon from "@mui/icons-material/Comment";
import { releventStyle } from "../utils/appInfoStyles";
import colors from "../../../styles/colors";
import { icon } from "../../../constants/icons";

const ReleventTab = ({ text }) => {
  const game = useSelector((state) => state.api.game);

  return (
    <Grid item container xs={12} md={4} style={{ display: "block" }}>
      <Paper style={{ ...releventStyle, marginBottom: "10px" }}>
        <Typography>{text}</Typography>
      </Paper>
      <Paper style={releventStyle}>
        <List>
          {game.categories.map((category) => (
            <ListItem key={category.description}>
              <ListItemIcon style={{ color: colors.white }}>
                {icon(category.description)}
              </ListItemIcon>
              <ListItemText primary={category.description} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default ReleventTab;
