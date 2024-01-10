'use client';
import React, { useState } from 'react';
import Pagination from './pagination';
import TableContainer from './TableContainer';

const Table = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div>
      <TableContainer />
      <Pagination
        onPageChange={(pageNum) => setCurrentPage(pageNum)}
        totalCount={200}
        siblingCount={1}
        currentPage={currentPage}
        pageSize={20}
      />
    </div>
  );
};

export default Table;
