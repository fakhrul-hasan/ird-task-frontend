"use client";
import React, { useState } from "react";
import { GrAppsRounded } from "react-icons/gr";

const AppearanceFunc = () => {
  const [languageSec, setLanguageSec] = useState(false);
  const [language, setLanguage] = useState("english");

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
            <GrAppsRounded
              className={`bg-gray-300 p-1 rounded-full text-2xl ${
                languageSec === true ? "text-primary" : "text-gray-600"
              }`}
            />
            <h6
              className={`lg:text-xs ${
                languageSec === true
                  ? "text-primary  font-medium"
                  : "text-gray-600 lg:font-thin"
              }`}
            >
              Appearance Settings
            </h6>
          </div>
        </div>
        {languageSec && (
          <div className="flex gap-2 justify-between p-3 border-b border-x rounded-md">
            <p className="text-sm lg:text-xs">Night Mode</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        )}
      </div>
    </>
  );
};

export default AppearanceFunc;
