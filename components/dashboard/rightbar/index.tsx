import Image from 'next/image';
import React from 'react';
import { MdPlayCircleFilled } from 'react-icons/md';

const Rightbar = () => {
  return (
    <div className='fixed'>
      <div className='relative bg-bgSoft item rounded-[10px] py-5'>
        <div className='absolute bottom-0 right-0 w-[50%] h-[50%]'>
          <Image
            src='/astronaut.png'
            alt='astronaut'
            className='bg-contain opacity-[0.2]'
            fill
          />
        </div>

        <div className='flex flex-col items-start gap-6'>
          <span className='font-bold'>🔥 Available Now</span>
          <h3 className='font-[500] text-[12px] text-textSoft'>
            How to use the new version of the admin dashboard?
          </h3>
          <span className=''>Takes 4 minutes to learn</span>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button
            className='p-[10px] flex items-center gap-[10px] cursor-pointer bg-[#5d57c9] text-white border-none rounded-[5px]'
          >
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
