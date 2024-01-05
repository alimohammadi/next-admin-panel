'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className='flex justify-between items-center p-5 rounded-[10px] bg-bgSoft'>
      <div className='text-textSoft font-bold capitalize'>
        {pathName.split('/').pop()}
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='flex items-center gap-x-[10px] bg-[#2e374a] p-[10px] rounded-[10px]'>
          <MdSearch />
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent border-none outline-none text-text'
          />
        </div>

        <div className='flex items-center gap-x-5'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
