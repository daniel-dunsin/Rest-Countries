import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Error404 from "./pages/404";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import { RootState } from "./store";

const App = () => {
  const { mode } = useSelector((state: RootState) => state.theme);
  return (
    <Router>
      <div className={`${mode === "dark" && "dark"}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<SingleCountry />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
