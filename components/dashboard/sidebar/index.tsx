import React from 'react';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';
import MenuLink from './menuLink';
import Image from 'next/image';

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className='sticky top-10 p-5'>
      <div className='flex items-center gap-5 mb-5'>
        <Image
          src=''
          alt='user_image'
          className='rounded-full bg-cover'
          width='50'
          height='50'
        />
        <div className='flex flex-col'>
          <span className='font-[500]'>John doe</span>
          <span className='text-[12px] text-textSoft'>Administrator</span>
        </div>
      </div>

      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className='text-textSoft font-bold text-[13px] py-[10px]'>
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink {...item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <button
        className='p-5 mx-[5px] flex items-center gap-[10px] cursor-pointer
       rounded-[10px] bg-transparent w-full hover:bg-[#2e374a]'
      >
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
