import { FiHome } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

const BottomMobileSec = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0 rounded-t-3xl h-20 bg-white z-20 flex flex-col justify-center md:hidden w-full'>
            <div className="flex justify-around items-center">
            <FiHome className="text-xl to-gray-600" />
            <GrAppsRounded className="text-xl to-gray-600" />
            <PiLightbulbFilamentLight className="text-xl to-gray-600" />
            <CiBookmark className="text-xl to-gray-600" />
            <FaRegCircleUser className="text-xl to-gray-600" />
            </div>
        </div>
    );
};

export default BottomMobileSec;