import React from "react";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import Platforms from "../../../components/Platforms";
import Price from "../../../components/price/Price";

const contentStyle = {
  display: "flex",
  height: "45%",
  alignContent: "space-between",
  justifyContent: "space-between",
  flexDirection: "column",
};

const StyledCard = withStyles({
  root: {
    background: "rgba( 0, 0, 0, 0.3 )",
    color: "white",
    height: "320px",
    cursor: "pointer",
    "&:hover": {
      // backgroundColor: "rgba( 0, 0, 0, 0.6 )",
      boxShadow: "0 0 8px 4px #67c1f5",
      cursor: "pointer",
      // opacity: "0.3",
    },
  },
})(Typography);

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const { name, header_image, platforms, price_overview } = game;

  const handleOpenGameInfo = (appid) => {
    navigate("/game", { state: appid });
  };

  return (
    <StyledCard
      onClick={() => handleOpenGameInfo(game._id)}
      style={{ margin: "8%" }}
    >
      <CardMedia
        component="img"
        alt="header_image"
        height="160"
        image={header_image}
      />
      <div style={contentStyle}>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <Price price_overview={price_overview} />
          <Platforms platforms={platforms} />
        </CardActions>
      </div>
    </StyledCard>
  );
};

export default GameCard;
