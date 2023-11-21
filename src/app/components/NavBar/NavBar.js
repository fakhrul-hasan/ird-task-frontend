'use client';
import Image from "next/image";
import { useState } from "react";
import { BsSearch, BsCaretDownFill, BsChevronLeft } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import SettingsMobileSec from "../SettingsSec/SettingsMobileSec";

const NavBar = () => {
  const [isSetting, setIsSetting] = useState(false);
  return (
    <>
    <nav className="py-4 grid grid-cols-2 items-start w-full h-16">
      <div className="col-span-1 flex items-center gap-2 md:gap-0">
      <BsChevronLeft className="inline-block md:hidden" />
      <Image src="/logo.png" className="h-16 w-20 hidden md:inline-block lg:hidden" alt="logo" height={80} width={80} priority />
        <h4 className="text-xl text-black">Duas Page</h4>
      </div>
      <div className="col-span-1 flex justify-end md:justify-between items-center gap-10">
        <div className="relative w-full lg:w-80 hidden md:block">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="py-2 px-2 placeholder:text-xs placeholder:text-gray-600 rounded w-full lg:w-80"
          />
          <BsSearch className="bg-gray-200 p-2 text-2xl absolute right-1 top-2 rounded" />
        </div>
        <IoIosSettings onClick={()=>setIsSetting(!isSetting)} className="text-2xl text-primary inline-block lg:hidden" />
        <div className="hidden md:flex items-center gap-1">
          <Image src="/profile.png" alt="profile" height={35} width={35} />
          <BsCaretDownFill />
        </div>
      </div>
    </nav>
      {isSetting && <SettingsMobileSec setIsSetting={setIsSetting} />}
    </>
  );
};

export default NavBar;
