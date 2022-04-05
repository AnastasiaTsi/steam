import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  MenuItem,
  LogoButton,
  content,
  header,
  menuItemContainer,
  headerLogoImage,
  actionMenu,
  buttonStyles,
} from "./headerStyles";
import { FakeLink } from "../../styles/globalStyles";
import LABELS from "../../constants/labels";
import ErrorAlert from "../ErrorAlert";
import { currency } from "../../redux/slices/currencySlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const currencySelector = useSelector((state) => state.currency);

  const { store, community, about, support, install, alertMessage } =
    LABELS.HEADER;

  const handleGoHome = () => {
    navigate("/");
  };

  const openToast = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  const changeCurrency = () => {
    if (currencySelector === "EUR") {
      dispatch(currency.actions.setCurrency("BRL"));
    } else if (currencySelector === "BRL") {
      dispatch(currency.actions.setCurrency("EUR"));
    }
  };

  return (
    <div position="static" style={header}>
      <div style={content}>
        <LogoButton
          onClick={() => handleGoHome()}
          edge="start"
          style={{ paddingTop: "30px" }}
        >
          <img
            src="header_logo.png"
            alt="header_logo"
            style={headerLogoImage}
          />
        </LogoButton>
        <div style={menuItemContainer}>
          <MenuItem>{store}</MenuItem>
          <MenuItem>{community}</MenuItem>
          <MenuItem>{about}</MenuItem>
          <MenuItem>{support}</MenuItem>
          <MenuItem>
            <FakeLink onClick={() => changeCurrency()}>
              {currencySelector}
            </FakeLink>
          </MenuItem>
          <MenuItem>
            <div style={actionMenu}>
              <Button style={buttonStyles} onClick={() => openToast()}>
                {install}
              </Button>
            </div>
          </MenuItem>
        </div>
      </div>
      <ErrorAlert opened={open} message={alertMessage} />
    </div>
  );
};
export default NavBar;
