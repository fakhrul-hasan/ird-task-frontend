"use client";
import { scrollToTarget } from "@/app/hooks/ScrollToTarget";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import Search from "../Search/Search";

const CategorySec = ({ categoryData }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedDua, setSelectedDua] = useState(null);
  const [scrollTarget, setScrollTarget] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [duas, setDuas] = useState([]);
  const [filteredCat, setFilteredCat] = useState(null);

  const toggleCategory = async (catId) => {
    if (selectedCategory === catId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(catId);
      const res = await fetch(`http://localhost:9000/subCategories/${catId}`);
      const subCategories = await res.json();
      setSubCategories(subCategories?.data);
    }
    setSelectedSubcategory(null);
  };

  const toggleSubcategory = async (catId, subcatId) => {
    if (selectedSubcategory === subcatId) {
      setSelectedSubcategory(null);
    } else {
      setSelectedSubcategory(subcatId);
      const res = await fetch(
        `http://localhost:9000/duas/${catId}/${subcatId}`
      );
      const duas = await res.json();
      setDuas(duas?.data);
      const firstDuaInSubcat = duas?.data?.find(
        (dua) => dua?.subcat_id === subcatId
      );
      setScrollTarget(`subcat-${subcatId}-dua-${firstDuaInSubcat?.dua_id}`);
    }
  };

  useEffect(() => {
    scrollToTarget(scrollTarget);
  }, [scrollTarget]);

  const handleSearch = (query) => {
    if (query?.length > 1) {
      const foundCat = categoryData?.filter((cat) =>
        cat?.cat_name_en?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCat(foundCat);
    }else if(query?.length < 2){
      setFilteredCat(null);
    }
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="mt-2 space-y-3">
        { filteredCat === null ?
        (categoryData?.map((category) => (
          <div key={category?.id} className="mb-2">
            <Link
              href={`/duas/${(category?.cat_name_en)
                .replace(/\s+/g, "-")
                .toLowerCase()}?cat=${category?.cat_id}`}
              className={`cursor-pointer flex items-center justify-between p-1 rounded-md text-black ${
                selectedCategory === category?.cat_id ? "bg-gray-200" : ""
              }`}
              onClick={() => toggleCategory(category?.cat_id)}
            >
              <div className="flex gap-1">
                <Image src="/Frame.png" alt="category" height={30} width={30} />
                <div>
                  <h6 className="text-sm font-medium">
                    {category?.cat_name_en}
                  </h6>
                  <p className="text-gray-600 text-xs">
                    Subcategories: {category?.no_of_subcat}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h5 className="text-sm">{category?.no_of_dua}</h5>
                <p className="text-xs text-gray-600">Duas</p>
              </div>
            </Link>
            {selectedCategory === category?.cat_id && (
              <div className="ml-5 border-l-2 border-dotted border-primary">
                {subCategories?.length > 0 &&
                  subCategories?.map((subcategory) => (
                    <div
                      key={subcategory?.subcat_id}
                      className="mb-2 cursor-pointer"
                    >
                      <div
                        className="ml-[5px] flex items-center relative pl-2"
                        onClick={() =>
                          toggleSubcategory(
                            subcategory?.cat_id,
                            subcategory?.subcat_id
                          )
                        }
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full absolute -left-[9px]" />
                        <h5
                          className={`text-xs font-medium ${
                            selectedSubcategory === subcategory?.subcat_id
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {subcategory?.subcat_name_en}
                        </h5>
                      </div>
                      {selectedSubcategory === subcategory?.subcat_id && (
                        <div className="">
                          {duas?.map((dua) => (
                            <div
                              key={dua?.dua_id}
                              className={`mb-2 text-xs cursor-pointer ml-5 flex items-center gap-2 w-full ${
                                selectedDua === dua?.dua_id
                                  ? "text-primary"
                                  : ""
                              }`}
                              onClick={() => {
                                setSelectedDua(dua?.dua_id);
                                setScrollTarget(
                                  `subcat-${dua?.subcat_id}-dua-${dua?.dua_id}`
                                );
                              }}
                            >
                              <BsChevronRight className="text-xs w-5 text-primary" />
                              <span className="w-40">
                                {dua?.dua_name_en === null
                                  ? "Null"
                                  : dua?.dua_name_en}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))) : (filteredCat?.map((category) => (
          <div key={category?.id} className="mb-2">
            <Link
              href={`/duas/${(category?.cat_name_en)
                .replace(/\s+/g, "-")
                .toLowerCase()}?cat=${category?.cat_id}`}
              className={`cursor-pointer flex items-center justify-between p-1 rounded-md text-black ${
                selectedCategory === category?.cat_id ? "bg-gray-200" : ""
              }`}
              onClick={() => toggleCategory(category?.cat_id)}
            >
              <div className="flex gap-1">
                <Image src="/Frame.png" alt="category" height={30} width={30} />
                <div>
                  <h6 className="text-sm font-medium">
                    {category?.cat_name_en}
                  </h6>
                  <p className="text-gray-600 text-xs">
                    Subcategories: {category?.no_of_subcat}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h5 className="text-sm">{category?.no_of_dua}</h5>
                <p className="text-xs text-gray-600">Duas</p>
              </div>
            </Link>
            {selectedCategory === category?.cat_id && (
              <div className="ml-5 border-l-2 border-dotted border-primary">
                {subCategories?.length > 0 &&
                  subCategories?.map((subcategory) => (
                    <div
                      key={subcategory?.subcat_id}
                      className="mb-2 cursor-pointer"
                    >
                      <div
                        className="ml-[5px] flex items-center relative pl-2"
                        onClick={() =>
                          toggleSubcategory(
                            subcategory?.cat_id,
                            subcategory?.subcat_id
                          )
                        }
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full absolute -left-[9px]" />
                        <h5
                          className={`text-xs font-medium ${
                            selectedSubcategory === subcategory?.subcat_id
                              ? "text-primary"
                              : ""
                          }`}
                        >
                          {subcategory?.subcat_name_en}
                        </h5>
                      </div>
                      {selectedSubcategory === subcategory?.subcat_id && (
                        <div className="">
                          {duas?.map((dua) => (
                            <div
                              key={dua?.dua_id}
                              className={`mb-2 text-xs cursor-pointer ml-5 flex items-center gap-2 w-full ${
                                selectedDua === dua?.dua_id
                                  ? "text-primary"
                                  : ""
                              }`}
                              onClick={() => {
                                setSelectedDua(dua?.dua_id);
                                setScrollTarget(
                                  `subcat-${dua?.subcat_id}-dua-${dua?.dua_id}`
                                );
                              }}
                            >
                              <BsChevronRight className="text-xs w-5 text-primary" />
                              <span className="w-40">
                                {dua?.dua_name_en === null
                                  ? "Null"
                                  : dua?.dua_name_en}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        )))}
      </div>
    </>
  );
};

export default CategorySec;
