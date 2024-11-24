import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageNotFound from "../layouts/PageNotFound";
import Login from "../pages/Login";
import UserProtect from "./UserProtect";
import ListUser from "../pages/ListUser";
import Edit from "../pages/Edit";
import Delete from "../pages/Delete";
import Add from "../pages/Add";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element=
          {
            <UserProtect>
              <ListUser />
            </UserProtect>
          } 
        />
        <Route path="login" element= {<Login/>} />
        <Route path="edit" element={<Edit />} />
        <Route path="delete/:id" element={<Delete />} />
        <Route path="add" element={<Add />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
