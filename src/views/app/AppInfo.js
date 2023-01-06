import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Grid, Typography, List, ListItem } from "@mui/material";
import { apiGET } from "../../redux/slices/apiSlice";
import Loader from "../../components/Loader";
import PageFormat from "../../components/PageFormat";
import NavBar from "../../components/header/Header";
import LABELS from "../../constants/labels";
import PurchaseArea from "./components/purchanse/PurchaseArea";
import ReleventTab from "./components/ReleventTab";
import { root, flexContainer, mediaStyle } from "./utils/appInfoStyles";
import Summary from "./components/summary/Summary";
import colors from "../../styles/colors";
import "../../styles/appInfo.css";
//226

const AppInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { relevent, about } = LABELS.GAMEINFO;

  const game = useSelector((state) => state.api.game);

  const [selectedMedia, setSelectedMedia] = useState({
    type: null,
    media: null,
  });

  useEffect(() => {
    if (!state) navigate("/");
    if (game?._id !== state) dispatch(apiGET({ appid: state }));
  }, [dispatch, state]);

  useEffect(() => {
    if (game)
      setSelectedMedia({
        type: "video",
        media: game.movies[0],
      });
  }, [game]);

  const openPicture = (path) => {
    window.open(path, "_blank");
  };

  return (
    <div style={{ ...root, backgroundImage: `url(${game?.background})` }}>
      <NavBar />
      {game && game?._id === state ? (
        <PageFormat>
          <Grid item container sm={12} md={8}>
            <Grid item xs={12}>
              {selectedMedia.type === "video" && (
                <ReactPlayer
                  controls={true}
                  url={selectedMedia.media.mp4["480"]}
                  width="100%"
                />
              )}
              {selectedMedia.type === "image" && (
                <img
                  onClick={() => openPicture(selectedMedia.media.path_full)}
                  src={selectedMedia.media.path_full}
                  alt="thumbnail"
                  style={{
                    width: "100%",
                    padding: "20px 0px",
                    cursor: "pointer",
                  }}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <List style={flexContainer}>
                {game.movies.map((movie) => (
                  <ListItem
                    key={movie.name}
                    className={
                      selectedMedia.media &&
                      selectedMedia.media.id === movie.id &&
                      "user-options"
                    }
                  >
                    <img
                      onClick={() =>
                        setSelectedMedia({
                          type: "video",
                          media: movie,
                        })
                      }
                      className={
                        selectedMedia.media &&
                        selectedMedia.media.id === movie.id &&
                        "box-shadow-image"
                      }
                      src={movie.thumbnail}
                      alt={movie.name}
                      style={mediaStyle}
                    />
                  </ListItem>
                ))}
                {game.screenshots.map((screenshot) => (
                  <ListItem
                    key={screenshot.id}
                    className={
                      selectedMedia.media &&
                      selectedMedia.media.id === screenshot.id &&
                      "user-options"
                    }
                  >
                    <img
                      className={
                        selectedMedia.media &&
                        selectedMedia.media.id === screenshot.id &&
                        "box-shadow-image"
                      }
                      onClick={() =>
                        setSelectedMedia({
                          type: "image",
                          media: screenshot,
                        })
                      }
                      src={screenshot.path_thumbnail}
                      alt={screenshot.id}
                      style={mediaStyle}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Grid item container sm={12} md={4}>
            <Summary />
          </Grid>

          <Grid item container xs={12} md={8} style={{ marginTop: "20px" }}>
            <Grid item xs={12}>
              <PurchaseArea />
            </Grid>

            <div style={{ textAlign: "left", marginTop: "20px" }}>
              <Typography style={{ color: colors.white }} variant="h5">
                {about}
              </Typography>

              <div
                className="about-this-game"
                style={{ width: "100%", color: colors.white }}
                dangerouslySetInnerHTML={{ __html: game.about_the_game }}
              />
            </div>
          </Grid>

          <ReleventTab xs={12} md={4} text={relevent} />
        </PageFormat>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AppInfo;
