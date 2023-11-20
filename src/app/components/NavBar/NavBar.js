import Image from "next/image";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="py-4 grid grid-cols-2 items-start w-full h-20">
      <div className="col-span-1">
        <h4 className="text-xl text-black">Duas Page</h4>
      </div>
      <div className="col-span-1 flex justify-between">
        <div className="relative w-52">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="py-1 px-2 placeholder:text-xs placeholder:text-gray-600 rounded w-52"
          />
          <BsSearch className="bg-gray-200 p-2 text-2xl absolute right-1 top-1 rounded" />
        </div>
        <div className="flex items-center gap-1">
          <Image src="/profile.png" alt="profile" height={35} width={35} />
          <BsCaretDownFill />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
