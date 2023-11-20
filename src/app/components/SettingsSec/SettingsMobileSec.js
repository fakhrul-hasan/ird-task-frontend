import AppearanceFunc from "../SettingsFunc/AppearanceFunc";
import FontFunc from "../SettingsFunc/FontFunc";
import GeneralFunc from "../SettingsFunc/GeneralFunc";
import LanguageFunc from "../SettingsFunc/LanguageFunc";

const SettingsMobileSec = ({setIsSetting}) => {
  return (
    <div className="flex z-20 h-full absolute w-full top-0 left-0">
      <div className=" bg-black opacity-60 flex-grow" onClick={()=>setIsSetting(false)}></div>
      <div className="bg-white py-3 px-1 w-64 rounded-xl absolute right-0 h-full">
        <h5 className="text-center py-3 text-lg lg:text-base">Settings</h5>
        <div className="space-y-3">
          <LanguageFunc />
          <GeneralFunc />
          <FontFunc />
          <AppearanceFunc />
        </div>
      </div>
    </div>
  );
};

export default SettingsMobileSec;
