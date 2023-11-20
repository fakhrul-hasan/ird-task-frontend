'use client';
import { useEffect, useState } from 'react';
import DuaCard from '../shared/DuaCard/DuaCard';
import { useSearchParams } from 'next/navigation';

const MainSection = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('cat')
   const [duas, setDuas] = useState([]);
   const [subcatName, setSubcatName] = useState([]);
   useEffect(()=>{
    const fetchData = async()=>{
        try {
            // Perform concurrent fetches using Promise.all
            const [duas, subcatName] = await Promise.all([
              fetch(`http://localhost:9000/duas/:catName?cat=${search}`).then((response) => response.json()),
              fetch(`http://localhost:9000/subCategories/${search}`).then((response) => response.json()),
            ]);
            setDuas(duas?.data);
            setSubcatName(subcatName?.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
    fetchData();
   }, [search])

    return (
        <div className='space-y-3 overflow-y-scroll' style={{ height: 'calc(100vh - 125px)' }}>
         <div className='bg-white rounded-md w-full text-sm p-3 font-medium'><span className='text-primary'>Section:</span> {subcatName[0]?.subcat_name_en}</div>
         {
            duas?.map(dua=><DuaCard key={dua?.dua_id} dua={dua} />)
         }
        </div>
    );
};


export default MainSection;