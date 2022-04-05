import PersonIcon from "@mui/icons-material/Person";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CommentIcon from "@mui/icons-material/Comment";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import GroupsIcon from "@mui/icons-material/Groups";
import CloudIcon from "@mui/icons-material/Cloud";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TvIcon from "@mui/icons-material/Tv";

export const icon = (category) => {
  switch (category) {
    case "Single-player":
      return <PersonIcon />;
    case "Multi-player":
      return <GroupAddIcon />;
    case "Co-op":
    case "Online Co-op":
      return <GroupsIcon />;
    case "PvP":
    case "Online PvP":
      return <AutoFixNormalIcon />;
    case "Partial Controller Support":
    case "Full controller support":
      return <SportsEsportsIcon />;
    case "Remote Play on Phone":
      return <PhoneIphoneIcon />;
    case "Remote Play on Tablet":
      return <TabletAndroidIcon />;
    case "Remote Play on TV":
      return <TvIcon />;
    case "In-App Purchases":
      return <AttachMoneyIcon />;
    case "Steam Cloud":
      return <CloudIcon />;
    case "Steam Achievements":
    case "Steam Leaderboards":
      return <WorkspacePremiumIcon />;
    default:
      return <CommentIcon />;
  }
};

// if (!category) {
//     state.games = data;
//   } else if (!isNaN(category)) {
//     state.game = data[0];
//   } else {
//     state[category] = data;
//   }
