import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import { RootState } from "../store";
import { FaSpinner } from "react-icons/fa";
import { getAllCountries } from "../services/countriesService";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    fetch: { loading, error, errorText },
    countriesSlice: { countries },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const getCountries = async () => {
    await dispatch(getAllCountries());
  };
  useEffect(() => {
    getCountries();
  }, []);
  if (loading) {
    return (
      <div className="w-full bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText min-h-screen px-8 flex justify-center items-center">
        <span className="text-[35px] text-[royalBlue] animate-spin">
          <FaSpinner />
        </span>
      </div>
    );
  }
  if (error && errorText.toString() === "404") {
    return (
      <>
        <main className="w-full min-h-screen bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText py-12 md:px-8 px-4 flex flex-col">
          <div className="mx-auto max-w-[1200px] w-full">
            {/* search box */}
            <Header />
          </div>
          <div className="flex-1 flex justify-center items-center max-w-[1200px] mx-auto text-center text-[20px] font-bold">
            No country related to this search
          </div>
        </main>
      </>
    );
  }
  return (
    <main className="w-full min-h-screen bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText py-12 md:px-8 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* search box */}
        <Header />
      </div>
      <div className="mt-[14px] flex flex-wrap gap-[2rem] justify-center items-center max-w-[1200px] mx-auto">
        {countries?.slice(0, 28).map((country, index: number) => {
          return (
            <Link
              key={index}
              to={`/country/${country.name.common}`}
              className="w-full md:flex-[32%] lg:flex-[23%] max-w-[300px] shadow-md rounded-md overflow-hidden"
            >
              <article>
                {/* image container */}
                <header className="w-full h-[180px]">
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </header>
                <main className="bg-white text-lightText dark:bg-darkElement dark:text-darkText p-6">
                  <h2 className="text-center font-bold text-[17px] mb-2">
                    {country.name.common}
                  </h2>
                  {country?.population! && (
                    <div className={styles.flexItems}>
                      <p className="font-bold">Population: </p>
                      <p>{country.population.toLocaleString() as string}</p>
                    </div>
                  )}
                  {country?.region && (
                    <div className={styles.flexItems}>
                      <p className="font-bold">Region: </p>
                      <p>{country.region}</p>
                    </div>
                  )}
                  {country?.capital?.length > 0 && (
                    <div className={styles.flexItems}>
                      <p className="font-bold">Capital: </p>
                      {country?.capital?.map(
                        (capital: string, index: number) => {
                          return (
                            <p key={index}>
                              {capital}
                              {index === country.capital.length - 1 ? (
                                ""
                              ) : (
                                <span className="ml-2">,</span>
                              )}
                            </p>
                          );
                        }
                      )}
                    </div>
                  )}
                </main>
              </article>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

const styles = {
  flexItems: "flex gap-x-2 items-center text-[15px]",
};

export default Home;
