import Image from 'next/image';
import React from 'react';
import CardBottomSec from '../CardBottomSec/CardBottomSec';

const DuaCard = ({dua}) => {
    const {dua_id, subcat_id, dua_name_en, top_en, dua_arabic, transliteration_en, translation_en, bottom_en, refference_en, audio} = dua;
    return (
        <div className='bg-white rounded-md p-3 space-y-3' id={`subcat-${subcat_id}-dua-${dua_id}`}>
            <h6 className='text-primary flex items-center gap-2 lg:text-sm font-medium'><Image src='/Allah.png' alt='' height={30} width={30}/> {dua_id}. {dua_name_en}</h6>
            <p className='lg:text-sm'>{top_en}</p>
            <p className='lg:text-sm text-end'>{dua_arabic}</p>
            <p className={`lg:text-sm italic ${transliteration_en === null ? 'hidden': ''}`}><span className='font-medium'>Transliteration:</span> {transliteration_en}</p>
            <p className={`lg:text-sm ${translation_en === null ? 'hidden': ''}`}><span className='font-medium'>Translation:</span> {translation_en}</p>
            <p className='lg:text-sm'>{bottom_en}</p>
            <p className='lg:text-sm'><span className='text-primary font-medium'>Reference:</span><br />{refference_en}</p>
            <div className={`flex items-center ${audio === null ? 'justify-end': 'justify-between'} `}>
            <audio className={`${audio === null ? 'hidden': 'text-primary'}`} src={audio} controls />
            <CardBottomSec/>
            </div>
        </div>
    );
};

export default DuaCard;