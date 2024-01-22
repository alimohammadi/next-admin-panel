'use client';
import React, { useState } from 'react';
import Pagination from './pagination';
import TableContainer from './TableContainer';
import './style.css';
const tableHeaderConfig = [
  { id: 0, title: '_id', value: '_id', width: '400px' },
  { id: 1, title: 'phoneNumber', value: 'phoneNumber', width: '100px' },
  { id: 2, title: 'amount', value: 'amount', width: '100px' },
  { id: 3, title: 'payed', value: 'payed', width: '100px' },
  { id: 4, title: 'createdAt', value: 'createdAt', width: '100px' },
];

const tableData = [
  {
    _id: '65004fef2add3e275fd79b75',
    phoneNumber: '09045292582',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-12T11:47:59.581Z',
  },
  {
    _id: '650164813fbdd79915f0566b',
    phoneNumber: '09128995917',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-13T07:28:01.390Z',
  },
  {
    _id: '6501677292f0834f92821f52',
    phoneNumber: '09128995908',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-13T07:40:34.603Z',
  },
  {
    _id: '65030382b8560a389ac48a3f',
    phoneNumber: '09045292583',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-14T12:58:42.516Z',
  },
];
const Table = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div>
      <TableContainer tableData={tableData} tableHeaderConfig={tableHeaderConfig} />
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
