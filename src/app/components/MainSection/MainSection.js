'use client';
import { useEffect, useState } from 'react';
import DuaCard from '../shared/DuaCard/DuaCard';
import { useSearchParams } from 'next/navigation';
import { MdMenu } from "react-icons/md";
import CategoryMobileSec from '../CategorySec/CategoryMobileSec';
import BottomMobileSec from '../BottomMobileSec/BottomMobileSec';
import Skeleton from '../Skeleton/Skeleton';

export async function getCategories() {
  const res = await fetch('http://localhost:9000/categories');
  const projects = await res.json();
  return projects;
}

const MainSection = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('cat')
   const [duas, setDuas] = useState([]);
   const [subcatName, setSubcatName] = useState([]);
   const [categoryData, setCategoryData] = useState([]);
   const [isCategory, setIsCategory] = useState(false);
   useEffect(()=>{
    const fetchData = async()=>{
        try {
            // Perform concurrent fetches
            const [duas, subcatName, categoryData] = await Promise.all([
              fetch(`http://localhost:9000/duas/:catName?cat=${search}`).then((response) => response.json()),
              fetch(`http://localhost:9000/subCategories/${search}`).then((response) => response.json()),
              fetch('http://localhost:9000/categories').then((response) => response.json()),
            ]);
            setDuas(duas?.data);
            setSubcatName(subcatName?.data);
            setCategoryData(categoryData?.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
    fetchData();
   }, [search])

   if(duas.length === 0){
    return <Skeleton/>;
   }

    return (
      <>
        <div className='space-y-3 overflow-y-scroll' style={{ height: 'calc(100vh - 100px)' }}>
        <div onClick={()=>setIsCategory(!isCategory)} className='bg-white rounded-md w-full text-sm p-3 font-medium flex lg:hidden items-center gap-2'><MdMenu /> {categoryData[0]?.cat_name_en}</div>
         <div className='bg-white rounded-md w-full text-sm p-3 font-medium'><span className='text-primary'>Section:</span> {subcatName[0]?.subcat_name_en}</div>
         {
            duas?.map(dua=><DuaCard key={dua?.dua_id} dua={dua} />)
         }
        </div>
        {isCategory && <CategoryMobileSec categoryData={categoryData} setIsCategory={setIsCategory} />}
        <BottomMobileSec/>
      </>
    );
};


export default MainSection;