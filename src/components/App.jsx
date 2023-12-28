import { Route, Routes } from "react-router-dom";
import { Phonebook } from "../pages/Phonebook/Phonebook";
import Header from "./Header/Header";
import Page404 from "../pages/Page404/Page404";
import { Register } from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "../redux/auth/operations";
import PrivateRoute from "../routesConfig/PrivateRoute";
import { PublicRoute } from "../routesConfig/PublicRoute";
import { selectIsRefresh } from "../redux/auth/selectors";
import { Loader } from "./Loader/Loader";


export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  const isRefresh = useSelector(selectIsRefresh)

  return isRefresh ? (<Loader />) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contacts" element={
          <PrivateRoute>
            <Phonebook />
          </PrivateRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
