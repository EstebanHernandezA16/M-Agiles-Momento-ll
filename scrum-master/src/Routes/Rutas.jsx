import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Welcome } from "../Welcome/Welcome";
import { Login } from "../Login/Login";
import { Menu } from "../shared/Menu/Menu";

export const Rutas = () => {
  return (
    <>
    <Menu/>
      <Routes>
        <Route path="/" Component={Welcome} />
        <Route path="/home" Component={Home} />
      </Routes>

     
      
    </>
  );
};
