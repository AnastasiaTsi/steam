import React from "react";
import CardMedia from "@mui/material/CardMedia";
import windowsIcon from "../assets/icons/icon_platform_win.png";
import macIcon from "../assets/icons/icon_platform_mac.png";
import linuxIcon from "../assets/icons/icon_platform_linux.png";

const rootStyle = {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
  alignItems: "stretch",
  width: "80px",
};

const Platforms = ({ platforms }) => {
  const { windows, mac, linux } = platforms;

  return (
    <div style={rootStyle}>
      <div>
        {mac && <CardMedia component="img" alt="mac_icon" image={macIcon} />}
      </div>
      <div>
        {linux && (
          <CardMedia component="img" alt="linux_icon" image={linuxIcon} />
        )}
      </div>
      <div>
        {windows && (
          <CardMedia component="img" alt="windows_icon" image={windowsIcon} />
        )}
      </div>
    </div>
  );
};

export default Platforms;
