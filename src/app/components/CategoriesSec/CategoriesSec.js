import React from "react";
import { BsSearch } from "react-icons/bs";
import CategorySec from "../CategorySec/CategorySec";

const CategoriesSec = () => {
  return (
    <>
      <div className="bg-primary text-white text-sm py-2 text-center rounded-t-md">
        Categories
      </div>
      <div className="bg-white p-2 rounded-b-md" style={{ height: 'calc(100vh - 125px)' }}>
      <div className="relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="py-1 pl-8 placeholder:text-xs placeholder:text-gray-600 rounded w-full border border-gray-200"
          />
          <BsSearch className="absolute left-2 top-2 rounded" />
        </div>
      <CategorySec/>
      </div>
    </>
  );
};

export default CategoriesSec;
