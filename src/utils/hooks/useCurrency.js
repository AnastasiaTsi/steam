const BRLtoEURO = 0.22;

/**
 * @param	{ Object }		priceOverview		  Data object from API.
 * @param	{ Boolean }		initial_formatted		WHich price
 */

const useCurrency = (priceOverview, currency) => {
  if (!priceOverview) return null;
  if (currency === priceOverview.currency) {
    return {
      initial: priceOverview.initial_formatted,
      final: priceOverview.final_formatted,
    };
  } else if (currency === "EUR") {
    return {
      initial: `${formatString(
        priceOverview.initial,
        priceOverview.initial_formatted,
        BRLtoEURO
      )} €`,
      final: `${formatString(
        priceOverview.final,
        priceOverview.final_formatted,
        BRLtoEURO
      )} €`,
    };
  }
};

const formatString = (number, format, convert) => {
  const sliced = format.slice(3);
  const index = reverseString(sliced).indexOf(",");

  let formattedNumber = number;
  for (let i = 0; i < index; i++) {
    formattedNumber /= 10;
  }

  formattedNumber *= convert;

  return Math.round(formattedNumber * 100) / 100;
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
export default useCurrency;
