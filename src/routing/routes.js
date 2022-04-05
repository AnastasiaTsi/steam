import Home from "../views/home/Home";
import GameInfo from "../views/app/AppInfo";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/game",
    component: GameInfo,
    exact: true,
  },
];

export default routes;
