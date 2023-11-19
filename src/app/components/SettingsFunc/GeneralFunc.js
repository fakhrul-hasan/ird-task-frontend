"use client";
import React, { useState } from "react";
import { BsCollection } from "react-icons/bs";

const GeneralFunc = () => {
  const [languageSec, setLanguageSec] = useState(false);

  const handleLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <>
      <div className="">
        <div
          className={`cursor-pointer flex items-center justify-between p-2 rounded-md bg-gray-100 border-l-4 ${
            languageSec === true ? "border-primary" : "border-transparent"
          }`}
          onClick={() => setLanguageSec(!languageSec)}
        >
          <div className="flex gap-2 items-center">
            <BsCollection
              className={`bg-gray-300 p-1 rounded-full text-2xl ${
                languageSec === true ? "text-primary" : "text-gray-600"
              }`}
            />
            <h6
              className={`text-xs ${
                languageSec === true
                  ? "text-primary  font-medium"
                  : "text-gray-600 font-thin"
              }`}
            >
              General Settings
            </h6>
          </div>
        </div>
        {languageSec && (
          <div className="p-2 border-b border-x rounded-md space-y-2">
            <div className="flex justify-between"><p className="text-xs">Show Arabic</p> <input type="checkbox" checked /></div>
            <div className="flex justify-between"><p className="text-xs">Show Translation</p> <input type="checkbox" checked /></div>
            <div className="flex justify-between"><p className="text-xs">Show Transliteration</p> <input type="checkbox" checked /></div>
            <div className="flex justify-between"><p className="text-xs">Show Refference</p> <input type="checkbox" checked /></div>
          </div>
        )}
      </div>
    </>
  );
};

export default GeneralFunc;
