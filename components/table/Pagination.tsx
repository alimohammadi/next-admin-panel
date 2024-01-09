'use client';

import React from 'react';
import { usePagination } from './usePagination';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

interface PaginationProps {
  onPageChange: (paeNum: any) => void;
  totalCount: number;
  siblingCount: 1 | 2 | 3;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => onPageChange(currentPage + 1);

  const onPrevious = () => onPageChange(currentPage - 1);

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className='flex items-center gap-x-5 '>
      {/* Left navigation arrow */}
      <button
        className={`cursor-pointer ${
          currentPage === 1 ? 'text-white/40' : 'text-white'
        }`}
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <MdArrowBackIosNew />
      </button>

      {paginationRange.map((pageNumber) => (
        // Render our Page Pills
        <li
          className={`text-[12px] text-white cursor-pointer w-8 h-8 flex items-center justify-center p-2 rounded-full ${
            pageNumber === currentPage
              ? 'bg-hoverbg'
              : 'bg-white/20'
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}

      {/*  Right Navigation arrow */}
      <button
        className={`cursor-pointer ${
          currentPage === lastPage ? 'text-white/40' : 'text-white'
        }`}
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <MdArrowForwardIos />
      </button>
    </ul>
  );
};

export default Pagination;
