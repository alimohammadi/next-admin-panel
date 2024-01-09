import { SearchBar } from '@/components';
import Link from 'next/link';
import React from 'react';

const Users = () => {
  return (
    <div className='mt-5 bg-bgSoft p-5 rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <SearchBar placeholder='Search for a user...' />
        <Link href='/dashboard/users/add' />
        <button className='p-[10px] bg-[#5d57c9] text-text border-none rounded-[5px]'>
          Add New
        </button>
      </div>
      <table></table>
    </div>
  );
};

export default Users;
