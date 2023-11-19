import Image from 'next/image';
import React from 'react';
import CardBottomSec from '../CardBottomSec/CardBottomSec';

const DuaCard = () => {
    return (
        <div className='bg-white rounded-md p-3 space-y-3'>
            <h6 className='text-primary flex items-center gap-2 text-sm font-medium'><Image src='/Allah.png' alt='' height={30} width={30}/> 504. Pray to Allah for refuge from Satan</h6>
            <p className='text-sm'>Allah says: And if there comes to you from Satan an evil suggestion, then seek refuge in Allah. Indeed, He is the Hearing, the Knowing.</p>
            <p className='text-sm'><span className='text-primary font-medium'>Reference:</span><br />Surah Fusilat 41:36</p>
            <CardBottomSec/>
        </div>
    );
};

export default DuaCard;