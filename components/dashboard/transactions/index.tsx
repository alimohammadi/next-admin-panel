import Image from 'next/image';
import React from 'react';
import './style.css';

const Transactions = () => {
  return (
    <div className='bg-bgSoft p-5 rounded-[10px]'>
      <h2 className='mb-5 font-[200] text-textSoft'>Latest Transactions</h2>
      <table className='w-full table'>
        <thead>
          <td>Name</td>
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
        </thead>
        <tbody>
          <tr>
            <td className='flex items-center gap-[10px]'>
              <Image
                src=''
                alt=''
                width={40}
                height={40}
                className='rounded-full object-cover'
              />
              John Doe
            </td>

            <td>
              <span className='rounded-[5px] p-[5px] text-[14px] text-white'>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>

          <tr>
            <td>
              <Image src='' alt='' width={40} height={40} className='' />
              John Doe
            </td>

            <td>
              <span className=''>Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>

          <tr>
            <td>
              <Image src='' alt='' width={40} height={40} className='' />
              John Doe
            </td>

            <td>
              <span className=''>Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>

          <tr>
            <td>
              <Image src='' alt='' width={40} height={40} className='' />
              John Doe
            </td>

            <td>
              <span className=''>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>

          <tr>
            <td>
              <Image src='' alt='' width={40} height={40} className='' />
              John Doe
            </td>

            <td>
              <span className=''>Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
