import { Footer, Navbar, Sidebar } from '@/components';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='flex-1 bg-bgSoft'>
        <Sidebar />
      </div>

      <div className='flex-[4] p-5'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
