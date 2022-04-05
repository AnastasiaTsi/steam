import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const { path, component: RouteComponent, exact } = route;
          return (
            <Route
              key={route.path}
              path={path}
              exact={exact}
              element={<RouteComponent />}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
