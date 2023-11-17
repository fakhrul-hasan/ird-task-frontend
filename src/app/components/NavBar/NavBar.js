import React from 'react';

const NavBar = () => {
    return (
        <nav className='mx-4 py-4 flex justify-between w-full'>
            <h4 className='text-xl'>Duas Page</h4>
            <div>
                <div className='relative'>
                    <input type="text" placeholder='Search by Dua Name' className='py-1 px-2 placeholder:text-xs' />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;