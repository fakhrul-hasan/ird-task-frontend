import Image from "next/image";
import React from "react";

const LeftSideBar = () => {
  return (
    <div className="h-screen py-4">
      <div className="bg-white ml-2 h-full rounded-xl py-2 px-1 flex flex-col justify-between shadow">
        <Image src="/logo.png" className="h-16 w-20" alt="logo" height={80} width={80} />
        <div className="flex flex-col items-center justify-between gap-5">
          <Image src="/Home.png" alt="logo" height={30} width={30} />
          <Image src="/All Duas.png" alt="logo" height={30} width={30} />
          <Image src="/Memorize.png" alt="logo" height={30} width={30} />
          <Image src="/Bookmark.png" alt="logo" height={30} width={30} />
          <Image src="/Ruqyah.png" alt="logo" height={30} width={30} />
          <Image src="/Dua Q&A.png" alt="logo" height={30} width={30} />
          <Image src="/Book.png" alt="logo" height={30} width={30} />
        </div>
        <Image src="/I want to support.png" className="h-16 w-20" alt="logo" height={80} width={80} />
      </div>
    </div>
  );
};

export default LeftSideBar;
