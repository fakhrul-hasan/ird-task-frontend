"use client";
import React, { useState } from "react";
import { GrAppsRounded } from "react-icons/gr";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const FontFunc = () => {
  const [fontSec, setFontSec] = useState(false);
  const [rangeValue, setRangeValue] = useState(17);

  const handleInputChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <>
      <div className="">
        <div
          className={`cursor-pointer flex items-center justify-between p-2 rounded-md bg-gray-100 border-l-4 ${
            fontSec === true ? "border-primary" : "border-transparent"
          }`}
          onClick={() => setFontSec(!fontSec)}
        >
          <div className="flex gap-2 items-center">
            <GrAppsRounded
              className={`bg-gray-300 p-1 rounded-full text-2xl ${
                fontSec === true ? "text-primary" : "text-gray-600"
              }`}
            />
            <h6
              className={`text-xs ${
                fontSec === true
                  ? "text-primary  font-medium"
                  : "text-gray-600 font-thin"
              }`}
            >
              Font Settings
            </h6>
          </div>
        </div>
        {fontSec && (
          <div className="p-2 border-b border-x rounded-md space-y-3">
            <p className="text-xs">Translation Font Size</p>
            <div className="flex items-center gap-2">
              <RangeSlider
                className="single-thumb"
                defaultValue={[0, 14]}
                thumbsDisabled={[true, false]}
                rangeSlideDisabled={true}
                onInput={(value) => setRangeValue(value[1])}
              />
              <output className="text-xs">{rangeValue}</output>
            </div>
            <div className="space-y-2">
            <p className="text-xs">Select Arabic Script</p>
            <select name="script" id="script" className="w-full mr-2 border p-2 rounded-md text-xs ">
                <option value="uthmani" className="py-2">Uthmani</option>
                <option value="indopak" className="py-2">Indopak</option>
            </select>
            </div>
            <div className="space-y-2">
            <p className="text-xs">Arabic Font</p>
            <select name="font" id="font" className="w-full mr-2 border p-2 rounded-md text-xs ">
                <option value="uthmani" className="py-2">Noor E Huda</option>
                <option value="indopak" className="py-2">Noor E Hedayet</option>
                <option value="indopak" className="py-2">Noor E Hira</option>
            </select>
            </div>
            <p className="text-xs">Arabic Font Size</p>
            <div className="flex items-center gap-2">
              <RangeSlider
                className="single-thumb"
                defaultValue={[0, 14]}
                thumbsDisabled={[true, false]}
                rangeSlideDisabled={true}
                onInput={(value) => setRangeValue(value[1])}
              />
              <output className="text-xs">{rangeValue}</output>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FontFunc;
