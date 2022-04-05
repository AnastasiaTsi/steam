import React from "react";
import { useSelector } from "react-redux";
import { Typography, List, ListItem, Paper, Divider } from "@mui/material";
import LABELS from "../../../../constants/labels";
import { releventStyle } from "../../utils/appInfoStyles";
import { FakeLink } from "../../../../styles/globalStyles";
import colors from "../../../../styles/colors";

const AppInfo = () => {
  const { developer, publisher, releaseDate } = LABELS.GAMEINFO;

  const game = useSelector((state) => state.api.game);

  return (
    <Paper style={releventStyle}>
      <img
        src={game.header_image}
        alt="header"
        style={{ width: "100%", margin: "5% 0% 10% 0%" }}
      />
      <div>
        <Typography variant="body1" gutterBottom style={{ textAlign: "left" }}>
          {game.short_description}
        </Typography>

        <Divider variant="middle" style={{ backgroundColor: colors.white }} />

        <List>
          <ListItem>
            <Typography>{developer} </Typography>
            {game.developers.map((developer) => (
              <FakeLink key={developer}>{developer}</FakeLink>
            ))}
          </ListItem>
          <ListItem>
            <Typography>{publisher}</Typography>
            {game.publishers.map((publisher) => (
              <FakeLink key={publisher}>{publisher}</FakeLink>
            ))}
          </ListItem>
          <ListItem>
            <Typography>
              {releaseDate} {game.release_date.date}
            </Typography>
          </ListItem>
        </List>
      </div>
    </Paper>
  );
};

export default AppInfo;
