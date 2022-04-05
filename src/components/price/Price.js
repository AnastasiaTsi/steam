import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import LABELS from "../../constants/labels";
import { discountStyle, rootStyles, initialPrice } from "./priceStyles";
import useCurrency from "../../utils/hooks/useCurrency";

const Price = ({ price_overview }) => {
  const { free } = LABELS.REST;
  const currency = useSelector((state) => state.currency);

  const currencies = useCurrency(price_overview || null, currency);

  return (
    <div style={rootStyles}>
      {price_overview?.discount_percent > 0 && (
        <Typography style={discountStyle}>
          -{price_overview.discount_percent}%
        </Typography>
      )}

      <div>
        <div>
          {price_overview?.discount_percent > 0 && (
            <Typography style={initialPrice}>{currencies?.initial}</Typography>
          )}
        </div>
        {price_overview?.final_formatted ? (
          <Typography> {currencies?.final} </Typography>
        ) : (
          <Typography>{free}</Typography>
        )}
      </div>
    </div>
  );
};

export default Price;
