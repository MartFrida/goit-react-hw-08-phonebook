import { Route, Routes } from "react-router-dom";
import { Phonebook } from "../pages/Phonebook/Phonebook";
import Header from "./Header/Header";
import Page404 from "../pages/Page404/Page404";
import { Register } from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "../redux/auth/operations";


export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk)
  }, [dispatch])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contacts" element={<Phonebook />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
