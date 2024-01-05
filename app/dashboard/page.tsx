import { Card, Chart, Rightbar, Transactions } from '@/components';
import React from 'react';

const Dashboard = () => {
  return (
    <div className='flex gap-5 mt-5'>
      <div className='flex-[3] flex flex-col gap-5'>
        <div className='flex gap-5 justify-between'>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>

      <div className='flex-1'>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
