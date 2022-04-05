import React from "react";
import Grid from "@mui/material/Grid";

const PageFormat = (props) => {
  return (
    <Grid container>
      <Grid item container xs={1} sm={2} lg={3} />

      <Grid
        item
        container
        xs={10}
        sm={8}
        lg={6}
        spacing={3}
        style={{ marginTop: "40px" }}
      >
        <>{props.children}</>
      </Grid>

      <Grid item container xs={1} sm={2} lg={3} />
      <div style={{ marginBottom: "20px" }}>.</div>
    </Grid>
  );
};

export default PageFormat;
