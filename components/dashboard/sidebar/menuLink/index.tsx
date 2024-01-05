'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface MenuLinkItem {
  icon: ReactNode;
  title: string;
  path: string;
}

const MenuLink = ({ icon, path, title }: MenuLinkItem) => {
  const pathName = usePathname();

  return (
    <Link
      className={`p-5 flex items-center gap-[10px] hover:bg-[#2e374a] my-[5px] rounded-[10px] ${
        path === pathName && 'bg-[#2e374a]'
      }`}
      href={path}
    >
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
