import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
  return (
    <div>
      <MdSupervisedUserCircle size={24} />
      <div>
        <span className=''>Total Users</span>
        <span className=''>10.273</span>
        <span className=''>
          <span className=''>12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
