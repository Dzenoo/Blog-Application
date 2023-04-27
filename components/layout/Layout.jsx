import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Main-navigation.module.css";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
