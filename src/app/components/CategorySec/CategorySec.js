"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const CategorySec = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Category 1",
      subcategories: [
        {
          id: 11,
          name: "Subcategory 1.1",
          links: ["Link 1.1.1", "Link 1.1.2"],
        },
        {
          id: 12,
          name: "Subcategory 1.2",
          links: ["Link 1.2.1", "Link 1.2.2"],
        },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      subcategories: [
        {
          id: 21,
          name: "Subcategory 2.1",
          links: ["Link 2.1.1", "Link 2.1.2"],
        },
        {
          id: 22,
          name: "Subcategory 2.2",
          links: ["Link 2.2.1", "Link 2.2.2"],
        },
      ],
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
    setSelectedSubcategory(null);
  };

  const toggleSubcategory = (subcategoryId) => {
    setSelectedSubcategory(
      selectedSubcategory === subcategoryId ? null : subcategoryId
    );
  };

  return (
    <div className="mt-2">
      {categories.map((category) => (
        <div key={category.id} className="mb-2">
          <div
            className={`cursor-pointer flex items-center justify-between p-1 rounded-md ${
              selectedCategory === category?.id
                ? "bg-gray-200"
                : ""
            }`}
            onClick={() => toggleCategory(category.id)}
          >
            <div className="flex gap-1">
              <Image src="/Frame.png" alt="category" height={30} width={30} />
              <div>
                <h6 className="text-sm">{category.name}</h6>
                <p className="text-gray-600 text-xs">Subcategories: 7</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
                <h5 className="text-sm">21</h5>
                <p className="text-xs text-gray-600">Duas</p>
            </div>
          </div>
          {selectedCategory === category.id && (
            <div className="ml-5 border-l-2 border-dotted border-primary">
              {category.subcategories.map((subcategory) => (
                <div key={subcategory.id} className="mb-2 cursor-pointer">
                  <div
                    className="ml-[5px] flex items-center relative pl-2"
                    onClick={() => toggleSubcategory(subcategory?.id)}
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full absolute -left-[9px]" />
                    <h5
                      className={`${
                        selectedSubcategory === subcategory?.id
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      {subcategory.name}
                    </h5>
                  </div>
                  {selectedSubcategory === subcategory.id && (
                    <div className="">
                      {subcategory.links.map((link) => (
                        <div
                          key={link}
                          className="mb-2 cursor-pointer ml-6 flex items-center"
                        >
                          <BsChevronRight className="text-xs text-primary" />
                          {link}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategorySec;
