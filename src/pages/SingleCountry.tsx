import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleCountry } from "../services/countriesService";
import { FaSpinner } from "react-icons/fa";
import { RootState } from "../store";
import { BiArrowBack } from "react-icons/bi";

const SingleCountry = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { singleCountry } = useSelector(
    (state: RootState) => state.countriesSlice
  );
  const { loading } = useSelector((state: RootState) => state.fetch);

  const getCountryDetails = async () => {
    await dispatch(getSingleCountry(name));
  };
  useEffect(() => {
    getCountryDetails();
  }, []);
  if (loading) {
    return (
      <section className="w-[100vw] bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText min-h-screen py-12 md:px-8 px-4 flex justify-center items-center">
        <span className="text-[35px] text-[royalBlue] animate-spin">
          <FaSpinner />
        </span>
      </section>
    );
  }
  return (
    <section className="w-[100vw] bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText min-h-screen py-12 md:px-8 px-4">
      <div className="w-full max-w-[1200px] mx-auto">
        <Link
          to={"/"}
          className="w-[120px] px-4 py-2 rounded-md shadow-md bg-white text-lightText dark:bg-darkElement dark:text-darkText flex items-center gap-x-2 justify-center"
        >
          <BiArrowBack /> Back
        </Link>
        <main className="mt-14 flex gap-[4rem] flex-col md:flex-row items-center">
          {/* item image */}
          <div className="w-full flex-[28%]">
            <img
              src={singleCountry?.flags?.png}
              alt={singleCountry?.name?.common}
              loading="lazy"
              className="w-full h-[300px]"
            />
          </div>
          <div className="w-full flex-[50%]">
            <h1 className="text-[27px] font-bold">
              {singleCountry?.name?.common}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between mt-8">
              {singleCountry?.name?.nativeName && (
                <article className={styles.flexItems}>
                  <p className="font-bold">Native name:</p>
                  <p>
                    {singleCountry?.name?.nativeName &&
                      singleCountry?.name?.nativeName[
                        Object.keys(singleCountry?.name?.nativeName)[0]
                      ].common}
                  </p>
                </article>
              )}
              {singleCountry?.tld && (
                <article className={styles.flexItems}>
                  <p className="font-bold">Top Level Domain:</p>
                  <p>{singleCountry?.tld}</p>
                </article>
              )}
              <article className={styles.flexItems}>
                <p className="font-bold">Population:</p>
                <p>{singleCountry?.population.toLocaleString()}</p>
              </article>
              <article className={styles.flexItems}>
                <p className="font-bold">Currencies:</p>
                <p>
                  {singleCountry?.currencies &&
                    singleCountry?.currencies[
                      Object.keys(singleCountry?.currencies)[0]
                    ].name}
                </p>
              </article>
              {singleCountry?.region && (
                <article className={styles.flexItems}>
                  <p className="font-bold">Region:</p>
                  <p>{singleCountry?.region}</p>
                </article>
              )}
              {singleCountry?.subregion && (
                <article className={styles.flexItems}>
                  <p className="font-bold">Subregion:</p>
                  <p>{singleCountry?.subregion}</p>
                </article>
              )}
              <article className={styles.flexItems}>
                <p className="font-bold">Languages:</p>
                <p>
                  {singleCountry?.languages &&
                    Object.keys(singleCountry?.languages)?.map(
                      (langKey: any, index: number) =>
                        index ===
                        Object.keys(singleCountry?.languages).length - 1
                          ? singleCountry?.languages[langKey]
                          : singleCountry?.languages[langKey] + ", "
                    )}
                </p>
              </article>
              <article className={styles.flexItems}>
                <p className="font-bold">Capital:</p>
                <p>{singleCountry?.capital.join(", ")}</p>
              </article>
            </div>
            {singleCountry?.borders?.length > 0 && (
              <article className={styles.flexItems + " mt-8 flex-wrap gap-6"}>
                <p className="font-bold max-w-fit w-full">Border Countries:</p>
                <div className="w-full flex gap-4 flex-wrap">
                  {singleCountry?.borders?.map((border, index: number) => {
                    return (
                      <p
                        key={index}
                        className="min-w-[100px] rounded-md shadow-md bg-white text-lightText dark:bg-darkElement dark:text-darkText text-[15px] text-center py-2 px-4"
                      >
                        {border}
                      </p>
                    );
                  })}
                </div>
              </article>
            )}
          </div>
        </main>
      </div>
    </section>
  );
};

const styles = {
  flexItems: "flex items-center gap-x-2 w-full",
};

export default SingleCountry;
