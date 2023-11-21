import Image from "next/image";
import React from "react";

const LeftSideBar = () => {
  return (
    <div className="h-screen py-4 hidden lg:block">
      <div className="bg-white h-full rounded-xl py-2 px-1 flex flex-col justify-between shadow max-w-[80px] overflow-y-scroll">
        <Image src="/logo.png" className="h-16 w-20" alt="logo" height={40} width={40} priority />
        <div className="flex flex-col items-center justify-between gap-5">
          <Image src="/Home.png" className="w-auto" alt="home" height={32} width={32} />
          <Image src="/All Duas.png" className="w-auto" alt="all dua" height={32} width={32} />
          <Image src="/Memorize.png" className="w-auto" alt="memorize" height={32} width={32} />
          <Image src="/Bookmark.png" className="w-auto" alt="bookmark" height={32} width={32} />
          <Image src="/Ruqyah.png" className="w-auto" alt="ruqyah" height={32} width={32} />
          <Image src="/Dua Q&A.png" className="w-auto" alt="dua q&a" height={32} width={32} />
          <Image src="/Book.png" className="w-auto" alt="book" height={32} width={32} />
        </div>
        <Image src="/I want to support.png" className="h-16 w-20" alt="logo" height={40} width={40} />
      </div>
    </div>
  );
};

export default LeftSideBar;
