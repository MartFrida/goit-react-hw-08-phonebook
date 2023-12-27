import { Route, Routes } from "react-router-dom";
import { Phonebook } from "../pages/Phonebook/Phonebook";
import Header from "./Header/Header";
import Page404 from "../pages/Page404/Page404";
import { Register } from "pages/Register/Register";


export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/phonebook" element={<Phonebook />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

    </>

  );
};
