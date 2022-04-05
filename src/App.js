import { ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import AppRoutes from "./routing/AppRoutes";
import { theme } from "./styles/customTheme";
import { currency } from "./redux/slices/currencySlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const localStorageCurrency = window.localStorage.getItem("currency");

  dispatch(currency.actions.setCurrency(localStorageCurrency || "BRL"));

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
