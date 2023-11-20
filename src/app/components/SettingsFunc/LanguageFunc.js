"use client";
import React, { useState } from "react";
import { MdOutlineTranslate } from "react-icons/md";

const LanguageFunc = () => {
const [languageSec, setLanguageSec] = useState(false);
const [language, setLanguage] = useState('english');

const handleLanguage=(lang)=>{
  setLanguage(lang);
}
  return (
    <>
        <div className="">
          <div
            className={`cursor-pointer flex items-center justify-between p-2 rounded-md bg-gray-100 border-l-4 ${languageSec === true ? 'border-primary':'border-transparent'}`} onClick={()=>setLanguageSec(!languageSec)}
          >
            <div className="flex gap-2 items-center">
              <MdOutlineTranslate className={`bg-gray-300 p-1 rounded-full text-2xl ${languageSec === true ? 'text-primary':'text-gray-600'}`}/>
                <h6 className={`text-sm lg:text-xs ${languageSec === true ? 'text-primary  font-medium':'text-gray-600 lg:font-thin'}`}>Language Settings</h6>
            </div>
          </div>
          {languageSec && (
            <div className="flex gap-2 justify-center py-3 border-b border-x rounded-md">
             <button onClick={()=>handleLanguage('english')} className={`px-3 py-2 border text-xs rounded-md ${language === 'english' ? 'bg-primary text-white': ''}`}>English</button>
             <button onClick={()=>handleLanguage('bangla')} className={`px-3 py-2 border text-xs rounded-md ${language === 'bangla' ? 'bg-primary text-white': ''}`}>বাংলা</button>
            </div>
          )}
        </div>
    </>
  );
};

export default LanguageFunc;
