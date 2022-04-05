import React, { useState } from "react";
import { CardMedia, Typography, CardContent, Grid, Card } from "@mui/material/";
import Price from "../../../../components/price/Price";
import Platforms from "../../../../components/Platforms";
import colors from "../../../../styles/colors";

const Slide = ({ game }) => {
  const { name, header_image, screenshots, price_overview } = game;
  const [headerImage, setHeaderImage] = useState(header_image);

  const showThumbnail = (src) => {
    setHeaderImage(src);
  };

  const showHeaderImage = () => {
    setHeaderImage(header_image);
  };

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${game.background})`,
      }}
    >
      <img
        className="slide-media"
        alt="Screenshot"
        src={headerImage}
        style={{ marginRight: "10px", width: "50%", objectFit: "contain" }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <CardContent style={{ flex: "1 0 auto" }}>
          <Typography style={{ color: colors.white }} variant="h5" gutterBottom>
            {name}
          </Typography>

          <div id="screenshots">
            {screenshots.slice(0, 4).map((screenshot) => (
              <img
                className="box-shadow"
                key={screenshot.id}
                onMouseEnter={() => showThumbnail(screenshot.path_full)}
                onMouseLeave={showHeaderImage}
                alt="Screenshot"
                style={{
                  height: "100px",
                  marginRight: "10px",
                }}
                src={screenshot.path_thumbnail}
              />
            ))}
          </div>
        </CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-around",
            marginBottom: "12px",
          }}
        >
          <Price price_overview={price_overview} />
          <Platforms platforms={game.platforms} />
        </div>
      </div>
    </Card>
  );
};

export default Slide;
