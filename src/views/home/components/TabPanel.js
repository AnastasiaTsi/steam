import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { apiGET } from "../../../redux/slices/apiSlice";
import Loader from "../../../components/Loader";
import GameCard from "./GameCard";
import colors from "../../../styles/colors";

const ValidationTextField = styled(TextField)({
  backgroundColor: "rgb(27, 40, 56, 0.5)",
  marginTop: "6%",
  width: "calc( 100% - 25px - 8px )",
  borderRadius: "50px",
  input: {
    color: colors.white,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "50px",
      borderColor: colors.white,
    },
    "&:hover fieldset": {
      borderColor: colors.link,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.link,
    },
  },
  "& input:valid + fieldset": {
    borderWidth: 2,
  },
  "& .MuiFormLabel-root": {
    color: colors.white,
    "&:hover": {
      borderColor: colors.link,
      color: "white",
    },
  },
});

const TabPanel = ({ tabSelected, param }) => {
  const dispatch = useDispatch();

  const new_and_trending = useSelector((state) => state.api.new_and_trending);
  const top_sellers = useSelector((state) => state.api.top_sellers);
  const being_played = useSelector((state) => state.api.being_played);
  const upcoming = useSelector((state) => state.api.upcoming);

  const [search, setSearch] = useState("");

  const gameCategories = [
    new_and_trending,
    top_sellers,
    being_played,
    upcoming,
  ];

  useEffect(() => {
    if (!gameCategories[tabSelected]) dispatch(apiGET({ tab: param }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, param, tabSelected]);

  useEffect(() => {
    setSearch("");
  }, [tabSelected]);

  const handleSearch = (textfieldValue) => {
    setSearch(textfieldValue);
  };

  return (
    <>
      {gameCategories[tabSelected] ? (
        <>
          <div style={{ backgroundColor: "#2a475e", borderRadius: "4px" }}>
            <div>
              <Grid item xs={12} md={6} lg={4} xl={4}>
                <ValidationTextField
                  value={search}
                  onChange={(event) => handleSearch(event.target.value)}
                  label="Search game"
                  variant="outlined"
                  id="search-input"
                  size="small"
                />
              </Grid>
            </div>
            <Grid container>
              {gameCategories[tabSelected]?.map((game) => (
                <>
                  {game.name.toLowerCase().includes(search.toLowerCase()) && (
                    <Grid item xs={12} md={6} lg={4} xl={4} key={game._id}>
                      <GameCard game={game} />
                    </Grid>
                  )}
                </>
              ))}
            </Grid>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
    </>
  );
};

export default TabPanel;
