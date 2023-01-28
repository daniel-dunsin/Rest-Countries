import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="w-full bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText min-h-screen px-8 flex justify-center items-center flex-col gap-y-6">
      <span className="text-[30px] text-red-600">
        <FaExclamationTriangle />
      </span>
      <h1>The requested page doesn't exist</h1>
      <Link
        to={"/"}
        className="p-3 bg-red-600 text-white rounded-md shadow-md hover:shadow-lg"
      >
        Return to homepage
      </Link>
    </div>
  );
};

export default Error404;
