import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { editTheme } from "../store/slices/themeSlice";
const Navbar = () => {
  const { mode } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const changeMode = () => {
    dispatch(editTheme());
  };
  return (
    <nav className="w-full px-4 py-4 md:px-8 bg-white text-lightText dark:bg-darkElement dark:text-darkText">
      <div className="max-w-[1200px] w-full flex justify-between items-center mx-auto">
        <h1 className="font-bold text-[19px]">Where in the world?</h1>
        <button className="flex gap-x-2 items-center" onClick={changeMode}>
          <i>{mode === "light" ? <BiMoon /> : <BiSun />}</i>
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
