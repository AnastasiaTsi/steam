import Typography from "@mui/material/Typography";
import LoadingImage from "../assets/loader.png";
import colors from "../styles/colors";
import LABELS from "../constants/labels";
import "../styles/loading.css";

const Loader = () => {
  const { loader } = LABELS.REST;

  return (
    <div>
      <header className="Loading">
        <img src={LoadingImage} className="Loading-logo" alt="logo" />
        <Typography style={{ color: colors.white }} variant="h4" component="h1">
          {loader}
        </Typography>
      </header>
    </div>
  );
};

export default Loader;
