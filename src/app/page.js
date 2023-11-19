import CategoriesSec from "./components/CategoriesSec/CategoriesSec";
import MainSection from "./components/MainSection/MainSection";
import NavBar from "./components/NavBar/NavBar";
import SettingsSec from "./components/SettingsSec/SettingsSec";


export default function Home() {
  return (
    <div className="flex-grow">
    <NavBar />
    <main className="grid grid-cols-4 gap-3">
      <div className="col-span-1">
        <CategoriesSec/>
      </div>
     <div className="col-span-3 flex gap-3">
      <MainSection/>
      <SettingsSec/>
     </div>
    </main>
    </div>
  )
}
