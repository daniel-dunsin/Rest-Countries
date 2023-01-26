import React, { useState } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { regionsList } from "../static/regionsList";

const Header = () => {
  const [selectRegionTabOpened, setSelectRegionTabOpened] =
    useState<boolean>(false);
  const [chosenRegion, setChosenRegion] = useState<string | "Select Region">(
    "Select Region"
  );

  const toggleSelectRegionTab = () => {
    setSelectRegionTabOpened((prev) => !prev);
  };

  const selectRegion = (region: string) => {
    setChosenRegion(region);
    setSelectRegionTabOpened(false);
  };

  return (
    <header className="flex items-center justify-between gap-x-4 flex-wrap">
      <form className="flex flex-row shadow-md rounded-md p-3 w-[400px] max-w-[90vw] sm:mx-0 mx-auto gap-x-4 bg-white text-lightText dark:bg-darkElement dark:text-darkText items-center">
        <button type="submit" className="flex-[0.2]">
          <BiSearch />
        </button>
        <input
          className="flex-10 w-full outline-none border-none bg-transparent"
          type="text"
          placeholder="Search for a country"
        />
      </form>
      <div className="md:w-[200px] w-[90vw] relative">
        <header
          className="w-full p-3 rounded-md shadow-md bg-white text-lightText dark:bg-darkElement dark:text-darkText flex justify-between items-center cursor-pointer"
          onClick={toggleSelectRegionTab}
        >
          <p>{chosenRegion}</p>
          <span className="text-[17px]">
            <BiChevronDown />
          </span>
        </header>
        {selectRegionTabOpened && (
          <aside className="absolute top-[110%] left-0 w-full bg-white text-lightText dark:bg-darkElement dark:text-darkText shadow-md rounded-md overflow-hidden">
            {regionsList.map((region: string, index: number) => {
              return (
                <article
                  onClick={() => {
                    selectRegion(region);
                  }}
                  key={index}
                  className="px-4 py-2 text-[15px] cursor-pointer hover:bg-[rgba(134,134,134,0.4)] dark:hover:bg-[rgba(0,0,0,0.4)]"
                >
                  {region}
                </article>
              );
            })}
          </aside>
        )}
      </div>
    </header>
  );
};

export default Header;
