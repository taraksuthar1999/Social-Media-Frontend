import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate, useNavigate } from "react-router-dom";
import { selectCurrentToken } from "../store/auth/actions";
import Loading from "../utils/Loading";
import Home from "./Home";
import Welcome from "./Welcome";
const RequireAuth = () => {
  let token = '';
  console.log()
  function hasJWT(){
    return document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("token="))
    ?.split("=")[1];
  }
  return hasJWT()||false ? <Outlet /> : <Navigate to={"/"} />;
};
export default RequireAuth;
