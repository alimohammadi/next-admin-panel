import React, { MouseEventHandler, useCallback, useRef, useState } from 'react';
import { FaArrowsAltH } from 'react-icons/fa';

interface TableContainerProps {
  tableHeaderConfig: Array<{
    id: number;
    title: string;
    value: string;
    width: string;
  }>;
  tableData: any;
}

type SortOrder = 'ascn' | 'desc';

const sortData = ({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Array<any>;
  sortKey: string;
  reverse: boolean;
}) => {
  if (!sortKey) return tableData;

  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) return sortedData.reverse();

  return sortedData;
};

const TableContainer = ({
  tableHeaderConfig,
  tableData,
}: TableContainerProps) => {
  const elementRef = useRef<Array<HTMLDivElement | null>>([]);

  const [sortKey, setSortKey] = useState<string>('phoneNumber');
  const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');
  const [isResizing, setResizing] = useState(false);

  const sortedData = useCallback(
    () => sortData({ tableData, sortKey, reverse: sortOrder === 'desc' }),
    [tableData, sortData, sortKey, sortOrder]
  );

  const SortButton = ({
    onClick,
  }: {
    sortOrder?: SortOrder;
    columnKey?: string | number | boolean;
    sortKey?: string | number | boolean;
    onClick: any;
  }) => (
    <div
      className='w-5 h-5 bg-red-300 cursor-pointer \0'
      onClick={() => {
        console.log('jjjjj');

        changeSort('ff');
      }}
    >
      ^vvv
    </div>
  );

  const changeSort = (key: string) => {
    setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    setSortKey(key);
  };

  const handleMouseDown = (indx: number) => {
    // console.log(indx);
    setResizing(true);
  };

  const handleMouseMove = (e: any, index: number) => {
    const currentCol = elementRef.current[index];

    if (isResizing && currentCol) {
      const currentColBounding = currentCol?.getBoundingClientRect();

      const mouseDistanceFromLeftOfScreen = e.clientX;
      const elementDistanceFromLeft = currentColBounding?.left;
      const distanceFromLeftOfElement =
        mouseDistanceFromLeftOfScreen - elementDistanceFromLeft;

      currentCol.style.width = `${distanceFromLeftOfElement}px`;

      console.log('distance from left', distanceFromLeftOfElement);
    }
  };

  return (
    <table className='w-full'>
      <thead>
        <tr className=''>
          {tableHeaderConfig.map((config, indx) => (
            <th
              style={{ width: config.width }}
              className='relative border-[1px] border-white'
              key={config.id}
              onMouseDown={(e) => handleMouseDown(indx)}
              onMouseMove={(e) => handleMouseMove(e, indx)}
              onMouseUp={() => {
                setResizing(false);
              }}
              onClick={() => changeSort(config.value)}
              ref={(el) => (elementRef.current[indx] = el)}
            >
              {config.title}
              {/* <SortButton
                columnKey={config.value}
                onClick={() => changeSort(config.value)}
                {...{ sortOrder, sortKey }}
              /> */}
              {/* <div
                dir='ltr'
                id='elem'
                ref={(el) => (elementRef.current[indx] = el)}
                onMouseDown={(e) => startContinuousFunction(indx, e)}
                onMouseUp={stopContinuousFunction}
                onMouseMove={(e) => startContinuousFunction(indx, e)}
                className='absolute mx-auto h-full top-0 w-full '
              >
               
                <div
                  className='custom-cursor absolute hidden'
                  ref={(el) => (cursorRef.current[indx] = el)}
                >
                  <FaArrowsAltH />
                </div>
              </div> */}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className='w-full'>
        {sortedData().map((data: any, indx: number) => (
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
