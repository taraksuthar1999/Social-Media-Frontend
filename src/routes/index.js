import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";

export const Router = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }, { path: "/welcome" }],
  },
];
