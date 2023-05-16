import React from "react";
const Login = React.lazy(() => import("../auth/Login"));

const RoutesArray = [{ path: "/", element: <Login /> }];
export default RoutesArray;