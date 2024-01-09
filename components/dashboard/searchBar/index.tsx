import React from 'react';
import { MdSearch } from 'react-icons/md';
interface SearchProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchProps) => {
  return (
    <div className='flex items-center gap-x-[10px] bg-[#2e374a] p-[10px] rounded-[10px]'>
      <MdSearch />
      <input
        type='text'
        placeholder={placeholder}
        className='bg-transparent border-none outline-none text-text'
      />
    </div>
  );
};

export default SearchBar;
