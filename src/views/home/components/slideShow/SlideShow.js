import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { apiGET } from "../../../../redux/slices/apiSlice";
import Loader from "../../../../components/Loader";
import Slide from "./Slide";
import "../../../../App.css";

const SlideShow = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.api.games);

  useEffect(() => {
    if (!games) dispatch(apiGET(null));
  }, [games, dispatch]);

  return (
    <div className="carousel-div">
      {games ? (
        <Carousel
          className="carousel"
          style={{ width: "inherit" }}
          navButtonsAlwaysVisible
          autoPlay={false}
        >
          {games.slice(12, 21).map((game, i) => (
            <Slide key={i} game={game} />
          ))}
        </Carousel>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SlideShow;
