import Image from 'next/image';
import React from 'react';
import CardBottomSec from '../CardBottomSec/CardBottomSec';

const DuaCard = ({dua}) => {
    // console.log(dua);
    const {dua_id, subcat_id, dua_name_en} = dua;
    return (
        <div className='bg-white rounded-md p-3 space-y-3' id={`subcat-${subcat_id}-dua-${dua_id}`}>
            <h6 className='text-primary flex items-center gap-2 text-sm font-medium'><Image src='/Allah.png' alt='' height={30} width={30}/> {dua_id}. {dua_name_en}</h6>
            <p className='text-sm'>Allah says: And if there comes to you from Satan an evil suggestion, then seek refuge in Allah. Indeed, He is the Hearing, the Knowing.</p>
            <p className='text-sm'><span className='text-primary font-medium'>Reference:</span><br />Surah Fusilat 41:36</p>
            <CardBottomSec/>
        </div>
    );
};

export default DuaCard;