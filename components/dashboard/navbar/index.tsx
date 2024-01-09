'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';
import SearchBar from '../searchBar';

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className='flex justify-between items-center p-5 rounded-[10px] bg-bgSoft'>
      <div className='text-textSoft font-bold capitalize'>
        {pathName.split('/').pop()}
      </div>
      <div className='flex items-center gap-x-5'>
        <SearchBar placeholder='Search...' />

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
