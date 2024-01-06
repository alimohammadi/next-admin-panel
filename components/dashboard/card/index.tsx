import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
  return (
    <div className='bg-bgSoft hover:bg-hoverbg p-5 rounded-[10px] flex gap-5 cursor-pointer w-full'>
      <MdSupervisedUserCircle size={24} />
      <div className='flex flex-col'>
        <span className=''>Total Users</span>
        <span className='text-[24px] font-[500]'>10.273</span>
        <span className='text-[14px] font-[300]'>
          <span className='text-lime-600'>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
