import React from "react";
import Header from "../components/header";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText py-12 md:px-8 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* search box */}
        <Header />
      </div>
    </main>
  );
};

export default Home;
