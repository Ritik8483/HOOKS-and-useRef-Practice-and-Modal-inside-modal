import React from "react";
import { useRoutes } from "react-router-dom";
const Login = React.lazy(() => import("../auth/Login"));

const RoutesComponent = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return routes;
};

export default RoutesComponent;
