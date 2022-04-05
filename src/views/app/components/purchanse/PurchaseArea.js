import React from "react";
import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import {
  cartButton,
  priceItem,
  discountItem,
  buyStyle,
  purchaseStyle,
  bodyStyle,
} from "./purchaseStyles";
import useCurrency from "../../../../utils/hooks/useCurrency";
import ErrorAlert from "../../../../components/ErrorAlert";
import Platforms from "../../../../components/Platforms";
import LABELS from "../../../../constants/labels";
import "../../../../styles/purchaseArea.css";

const PurchaseArea = () => {
  const { buy, specialPromo, play, addCart, free, playGame } = LABELS.PURCHASE;

  const game = useSelector((state) => state.api.game);
  const [open, setOpen] = React.useState(false);

  const currency = useSelector((state) => state.currency);
  const currencies = useCurrency(game?.price_overview || null, currency);

  const alertMessage = (
    <>
      You should play less and
      <span style={{ fontWeight: "bold", fontStyle: "italic" }}>hack </span>
      more
    </>
  );

  const openToast = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  return (
    <div>
      <div className="purchase-area-box">
        {game.hasOwnProperty("price_overview") ? (
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-between",
              }}
            >
              <Typography style={buyStyle} variant="h5" gutterBottom>
                {buy} {game.name}
              </Typography>
              <Platforms platforms={game.platforms} />
            </div>

            {game?.price_overview.discount_percent > 0 && (
              <div style={bodyStyle}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", color: "#c6d4df" }}
                  gutterBottom
                >
                  {specialPromo}
                </Typography>
              </div>
            )}
          </div>
        ) : (
          <Typography
            style={{ textAlign: "left", fontWeight: "bold", color: "#c6d4df" }}
            variant="h5"
            gutterBottom
          >
            {play} {game.name}
          </Typography>
        )}
      </div>
      <div style={purchaseStyle}>
        <div className="purchase-action">
          {game.hasOwnProperty("price_overview") ? (
            <>
              {game?.price_overview.discount_percent > 0 && (
                <Typography style={discountItem}>
                  - {game?.price_overview.discount_percent}%
                </Typography>
              )}
              <div>
                {game?.price_overview.discount_percent > 0 && (
                  <Typography
                    style={{ ...priceItem, textDecoration: "line-through" }}
                  >
                    {currencies?.initial}
                  </Typography>
                )}
              </div>
              <Typography style={priceItem}>{currencies?.final}</Typography>
              <Button onClick={() => openToast()} style={cartButton}>
                {addCart}
              </Button>
            </>
          ) : (
            <>
              <Typography style={priceItem}>{free}</Typography>
              <Button onClick={() => openToast()} style={cartButton}>
                {playGame}
              </Button>
            </>
          )}
        </div>
      </div>
      <ErrorAlert opened={open} message={alertMessage} />
    </div>
  );
};

export default PurchaseArea;
