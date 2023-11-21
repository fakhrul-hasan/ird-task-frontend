import AppearanceFunc from '../SettingsFunc/AppearanceFunc';
import FontFunc from '../SettingsFunc/FontFunc';
import GeneralFunc from '../SettingsFunc/GeneralFunc';
import LanguageFunc from '../SettingsFunc/LanguageFunc';

const SettingsSec = () => {
    return (
        <aside className='bg-white py-3 px-1 w-full rounded-xl hidden lg:block'>
            <h5 className='text-center py-3'>Settings</h5>
            <div className='space-y-3'>
                <LanguageFunc/>
                <GeneralFunc/>
                <FontFunc/>
                <AppearanceFunc/>
            </div>
        </aside>
    );
};

export default SettingsSec;