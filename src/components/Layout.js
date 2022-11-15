import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {

  useEffect(() => {
    console.log('layout')
  });
  return <Outlet />;
};

export default Layout;
