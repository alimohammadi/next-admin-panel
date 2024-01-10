import React from 'react';

const tableColConfig = [
  { id: 0, title: '_id', value: '_id', width: '100px' },
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
    phoneNumber: '09128995907',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-13T07:28:01.390Z',
  },
  {
    _id: '6501677292f0834f92821f52',
    phoneNumber: '09128995907',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-13T07:40:34.603Z',
  },
  {
    _id: '65030382b8560a389ac48a3f',
    phoneNumber: '09045292582',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-14T12:58:42.516Z',
  },
];

const TableContainer = () => {
  // onMouseDown={() => {}}
  // onTouchStart={() => {}}
  return (
    <table className='w-full'>
      <thead>
        <tr>
          {tableColConfig.map((config) => (
            <th key={config.id}>{config.title}</th>
          ))}
        </tr>
      </thead>

      <tbody className='w-full'>
        {tableData.map((data: any, indx: number) => (
          <tr key={indx}>
            {Object.keys(data).map((key) => (
              <td key={key} className='text-center'>
                {data[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContainer;
